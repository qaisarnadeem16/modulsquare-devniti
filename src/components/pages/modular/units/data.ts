// data/modularUnits.ts
export type ModularUnit = {
    id: string;
    title: string;
    size: string;
    description: string;
    idealFor: string;
    specs: {
        title: string;
        details: string[];
    }[];
    images: string[];
    specImages: string[];
};

export const modularUnits: any[] = [
    {
        id: "ms150",
        title: "MS 150",
        size: "14m²",
        description:
            "The MS 150 range consists of 14m² non-stackable modular units.",
        idealFor:
            "offices, restrooms, changing rooms, break rooms (up to 5 people), studios, or spaces for health and wellness professionals, etc.",
        images: ["/assets/m1.jpg"],
        specs: [
            {
                title: "Exterior dimensions",
                details: ["Length: 5.85 m", "Width: 2.40 m", "Height: 2.63 m"],
            },
            {
                title: "Carpentry",
                details: ["Aluminum, with barred door and window."],
            },
            {
                title: "Materials:",
                details: ["Galvanized steel, 40mm micro-ribbed panels, fiber cement board, flexible flooring, gutter"],
            },
            {
                title: "Additional information:",
                details: ["Not stackable"],
            },
        ],
        specImages: ["/assets/m1-2.png"],
    },

    {
        id: "ms250",
        title: "MS 250",
        size: "14m²",
        description:
            "The MS 250 range consists of 14m² stackable modular units.",
        idealFor:
            " construction site offices, restrooms, laboratories, storage, etc.",
        images: ["/assets/m2.png"],
        specs: [
            {
                title: "Exterior dimensions",
                details: ["Length: 5.85 m", "Width: 2.43 m", "Height: 2.79 m"],
            },
            {
                title: "Carpentry",
                details: ["Aluminum, with barred door and window."],
            },
            {
                title: "Materials:",
                details: ["Galvanized steel, 50mm micro-ribbed panels, fiber cement board, flexible flooring, gutter."],
            },
            {
                title: "Additional information:",
                details: ["Stackable"],
            },
        ],
        specImages: ["/assets/m2-1.png"],
    },


    {
        id: "ms125",
        title: "MS 125",
        size: "14m²",
        description:
            "The MS 125 range consists of 7m² non-stackable modular units.",
        idealFor:
            " a security booth, an office, a workshop, a room extension, etc.",
        images: ["/assets/m3.jpg"],
        specs: [
            {
                title: "Exterior dimensions",
                details: ["Length: 2.87 m", "Width: 2.40 m", "Height: 2.63 m"],
            },
            {
                title: "Carpentry",
                details: ["Aluminum, with barred door and window."],
            },
            {
                title: "Materials:",
                details: ["Galvanized steel, 40mm micro-ribbed panels, fiber cement board, flexible flooring, gutter."],
            },
            {
                title: "Additional information:",
                details: ["Not stackable, half-standard size"],
            },
        ],
        specImages: ["/assets/m3-1.png"],
    },


    {
        id: "ms130",
        title: "MS 130",
        size: "14m²",
        description:
            "The MS 130 range consists of 7m² non-stackable modular units, designed for half snack-box setups ",
        idealFor:
            "permanent or temporary retail points, street markets, pop-up stores, etc.",
        images: ["/assets/m4.png"],
        specs: [
            {
                title: "Exterior dimensions",
                details: ["Length: 2.87 m", "Width: 2.40 m", "Height: 2.63 m"],
            },
            {
                title: "Carpentry",
                details: ["One door and a gas strut opening"],
            },
            {
                title: "Materials:",
                details: ["Galvanized steel, 40mm micro-ribbed panels, fiber cement board, flexible flooring, gutter."],
            },
            {
                title: "Additional information:",
                details: ["Not stackable"],
            },
        ],
        specImages: ["/assets/m4-1.png"],
    },


    {
        id: "ms260",
        title: "MS 260",
        size: "14m²",
        description:
            "The MS 260range consists of 14m² stackable snack modular units, specifically designed for snack-box setups. They can be stacked, moved, and assembled. ",
        idealFor:
            "permanent or temporary retail points, street markets, pop-up stores, and all types of events.",
        images: ["/assets/m5.jpg"],
        specs: [
            {
                title: "Exterior dimensions",
                details: ["Length: 5.85 m", "Width: 2.43 m", "Height: 2.79 m"],
            },
            {
                title: "Carpentry",
                details: ["One door and a gas strut opening"],
            },
            {
                title: "Materials:",
                details: ["Galvanized steel, 50mm micro-ribbed panels, fiber cement board, flexible flooring, gutter."],
            },
            {
                title: "Additional information:",
                details: ["Stackable"],
            },
        ],
        specImages: ["/assets/m5-1.png"],
    },

    {
        id: "ms100",
        title: "MS 100",
        size: "14m²",
        description:
            "The MS 100 range consists of 2m² standalone toilet modular units, designed to be installed on-site. ",
        idealFor:
            "permanent or temporary retail points, street markets, pop-up stores, and all types of events.",
        images: ["/assets/m6.png"],
        specs: [
            {
                title: "Exterior dimensions",
                details: ["Length: 1.19 m", "Width: 1.20 m", "Height: 2.20 m"],
            },
            {
                title: "Carpentry",
                details: ["Solid exterior door (0.70 x 2.05 m), equipped with a top-hinged transom window with 4mm single glazing."],
            },
            {
                title: "Materials:",
                details: ["Galvanized steel, 40mm micro-ribbed panels, fiber cement board, flexible flooring, gutter."],
            },
            {
                title: "Additional information:",
                details: ["Not stackable"],
            },
        ],
        specImages: ["/assets/mr-100_2-copie2.png"],
    },
];
