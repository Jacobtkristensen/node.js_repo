import { readPage, renderPage } from "./templatingEngine.js";
import { GOOGLE_FONT_LINKS } from "./ExternalLinks.js";


const homepage = readPage("./public/pages/homepage/homepage.html");
export const homepagePage = renderPage(homepage, {
    tabTitle: "Homepage",
    STYLE_IMPORTS: GOOGLE_FONT_LINKS + '<link rel="stylesheet" href="/assets/css/main.css">'

});

// const matches = readPage("./public/pages/matches/matches.html");
// export const matchesPage = renderPage(matches, {
//     tabTitle: "DogInder Match",
//     STYLE_IMPORTS: '<link rel="stylesheet" href="pages/matches/matches.css">'

// });

// const contact = readPage("./public/pages/contact/contact.html");
// export const contactPage = renderPage(contact, {
//     tabTitle: "DogInder Contact",
// });
