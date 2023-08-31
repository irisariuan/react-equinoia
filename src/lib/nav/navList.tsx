import { LinkObject } from "./navlib";

export const navList: LinkObject[] = [
    { title: "Home", content: "/" },
    { title: "About Us", content: "/about" },
    {
        title: "Election Platform",
        content: [
            { title: "Internal Activities", content: "/election/internal" },
            { title: "External Activites", content: "/election/external" },
            { title: "Welfare", content: "/election/welfare" },
            { title: "Policies", content: "/election/policy" },
        ],
    },
    { title: "Supporting Schools", content: "/supportSchools" },
    { title: "Photos", content: "/photo" },
]