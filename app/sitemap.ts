import {MetadataRoute} from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseURL = "https://www.ghenergy.com.mx";
    const currentDate = new Date()

    return [
        {
            url: `${baseURL}/`,
            lastModified: currentDate,
            changeFrequency: "monthly",
            priority: 1
        },
        {
            url: `${baseURL}/proyectos`,
            lastModified: currentDate,
            changeFrequency: "monthly",
            priority: 0.8
        },
        {
            url: `${baseURL}/servicios`,
            lastModified: currentDate,
            changeFrequency: "monthly",
        },
        {
            url: `${baseURL}/contacto`,
            lastModified: currentDate,
            changeFrequency: "monthly",
            priority: 0.7
        },
        {
            url: `${baseURL}/enfoque`,
            lastModified: currentDate,
            changeFrequency: "monthly",
            priority: 0.6
        },
    ]
}