"use client";
import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: string;
  twitterCard?: "summary" | "summary_large_image" | "app" | "player";
  canonical?: string;
  noindex?: boolean;
}

/**
 * SEO Component for Next.js that works with "use client"
 * Updates document head with meta tags dynamically
 */
export default function SEO({
  title,
  description,
  keywords = [],
  ogImage,
  ogType = "website",
  twitterCard = "summary_large_image",
  canonical,
  noindex = false,
}: SEOProps) {
  useEffect(() => {
    // Set page title
    document.title = title;

    // Helper function to update or create meta tags
    const updateMetaTag = (selector: string, content: string) => {
      let element = document.querySelector(selector);
      if (element) {
        element.setAttribute("content", content);
      } else {
        element = document.createElement("meta");
        const selectorParts = selector.match(/\[(.+?)="(.+?)"\]/);
        if (selectorParts) {
          element.setAttribute(selectorParts[1], selectorParts[2]);
          element.setAttribute("content", content);
          document.head.appendChild(element);
        }
      }
    };

    // Update description
    updateMetaTag('meta[name="description"]', description);

    // Update keywords
    if (keywords.length > 0) {
      updateMetaTag('meta[name="keywords"]', keywords.join(", "));
    }

    // Update Open Graph tags
    updateMetaTag('meta[property="og:title"]', title);
    updateMetaTag('meta[property="og:description"]', description);
    updateMetaTag('meta[property="og:type"]', ogType);

    if (ogImage) {
      updateMetaTag('meta[property="og:image"]', ogImage);
    }

    // Update Twitter Card tags
    updateMetaTag('meta[name="twitter:card"]', twitterCard);
    updateMetaTag('meta[name="twitter:title"]', title);
    updateMetaTag('meta[name="twitter:description"]', description);

    if (ogImage) {
      updateMetaTag('meta[name="twitter:image"]', ogImage);
    }

    // Update canonical URL
    if (canonical) {
      let linkElement = document.querySelector(
        'link[rel="canonical"]'
      ) as HTMLLinkElement;
      if (linkElement) {
        linkElement.href = canonical;
      } else {
        linkElement = document.createElement("link");
        linkElement.rel = "canonical";
        linkElement.href = canonical;
        document.head.appendChild(linkElement);
      }
    }

    // Update robots meta tag
    if (noindex) {
      updateMetaTag('meta[name="robots"]', "noindex, nofollow");
    } else {
      const robotsTag = document.querySelector('meta[name="robots"]');
      if (robotsTag) {
        robotsTag.setAttribute("content", "index, follow");
      }
    }
  }, [
    title,
    description,
    keywords,
    ogImage,
    ogType,
    twitterCard,
    canonical,
    noindex,
  ]);

  return null;
}
