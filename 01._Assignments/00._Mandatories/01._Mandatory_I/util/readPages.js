import { readPage, renderPage } from "./templatingEngine.js";
import {
    GOOGLE_FONT_LINKS,
    MAIN_CSS_LINK,
    HOMEPAGE_CSS_LINK,
    TOPIC_CSS_LINK,
    CODE_HIGHLIGHT_LINK
} from "./ExternalLinks.js";

const homepage = readPage("./public/pages/homepage/homepage.html");
export const homepagePage = renderPage(homepage, {
    tabTitle: "Homepage",
    STYLE_IMPORTS: GOOGLE_FONT_LINKS + HOMEPAGE_CSS_LINK + MAIN_CSS_LINK

});

const introduction = readPage("./public/pages/introduction/introduction.html");
export const introductionPage = renderPage(introduction, {
    tabTitle: "Introduction",
    STYLE_IMPORTS: GOOGLE_FONT_LINKS + MAIN_CSS_LINK + TOPIC_CSS_LINK + CODE_HIGHLIGHT_LINK
});

const firstserver = readPage("./public/pages/firstserver/firstserver.html");
export const firstserverPage = renderPage(firstserver, {
    tabTitle: "First Server",
    STYLE_IMPORTS: GOOGLE_FONT_LINKS + MAIN_CSS_LINK + TOPIC_CSS_LINK + CODE_HIGHLIGHT_LINK
});

const htmlfiles = readPage("./public/pages/htmlfiles/htmlfiles.html");
export const htmlfilesPage = renderPage(htmlfiles, {
    tabTitle: "HTML Files",
    STYLE_IMPORTS: GOOGLE_FONT_LINKS + MAIN_CSS_LINK + TOPIC_CSS_LINK + CODE_HIGHLIGHT_LINK
});

const time = readPage("./public/pages/time/time.html");
export const timePage = renderPage(time, {
    tabTitle: "Time",
    STYLE_IMPORTS: GOOGLE_FONT_LINKS + MAIN_CSS_LINK + TOPIC_CSS_LINK + CODE_HIGHLIGHT_LINK
});

const exportImport = readPage("./public/pages/exportImport/exportImport.html");
export const exportImportPage = renderPage(exportImport, {
    tabTitle: "Export Import",
    STYLE_IMPORTS: GOOGLE_FONT_LINKS + MAIN_CSS_LINK + TOPIC_CSS_LINK + CODE_HIGHLIGHT_LINK
});

const ssr = readPage("./public/pages/ssr/ssr.html");
export const ssrPage = renderPage(ssr, {
    tabTitle: "SSR",
    STYLE_IMPORTS: GOOGLE_FONT_LINKS + MAIN_CSS_LINK + TOPIC_CSS_LINK + CODE_HIGHLIGHT_LINK
});

const async = readPage("./public/pages/async/async.html");
export const asyncPage = renderPage(async, {
    tabTitle: "Asynchronous Code / Routers",
    STYLE_IMPORTS: GOOGLE_FONT_LINKS + MAIN_CSS_LINK + TOPIC_CSS_LINK + CODE_HIGHLIGHT_LINK
});