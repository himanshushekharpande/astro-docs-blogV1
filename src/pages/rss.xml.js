import rss, {pagesGlobToRssItems} from "@astrojs/rss";

export async function GET(context) {
    return rss ({
        title: "Sloppd | Blog",
        description: "An assortment of reality, ignored by many.",
        site: context.site,
        items: await pagesGlobToRssItems(import.meta.glob("./**/*.md")),
        customData: `<language>en-US</language>`
    });
}