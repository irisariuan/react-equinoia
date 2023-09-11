import { LinkObject } from "./navlib";

export const navList: LinkObject[] = [
    { title: "Home", content: "/" },
    { title: "About Us", content: "/about" },
    {
        title: "Welfare",
        content: [{title: 'Clothing', content: '/welfare/clothing'}, {title: 'Catering', content: '/welfare/catering'}, {title: 'Accessories', content:'/welfare/accessories'}, {title: 'Entertainment', content: '/welfare/entertainment'}, {title: 'Others', content: '/welfare/others'}]
    },
    { title: "Supporting Schools", content: "/supportSchools" },
    { title: "Photos", content: "/photo" },
]