import { LinkObject } from "./nav";

export const navList: LinkObject[] = [
    { title: "Home", content: "/" },
    { title: "About Us", content: "/about" },
    {
        title: "Election Platform",
        content: [
            { title: "Internal Activities", content: "/internal" },
            { title: "External Activites", content: "/external" },
            { title: "Welfare", content: "/welfare" },
            { title: "Policies", content: "/policy" },
        ],
    },
    { title: "Supporting Schools", content: "/support" },
    { title: "Photos", content: "/photo" },
]