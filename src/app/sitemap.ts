import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://dansufoods.com";
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/services/market`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/services/business-plan`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/services/finaning`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/erp`,
      lastModified: new Date(),
    },
    {
      url: baseUrl || "fr",
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/fr/about`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/fr/services`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/fr/contact`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/fr/blog`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/fr/services/market`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/fr/services/business-plan`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/fr/services/finaning`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/fr/erp`,
      lastModified: new Date(),
    },
  ];
}
