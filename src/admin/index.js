import CMS from "netlify-cms-app";
import HomePagePreview from "./preview-templates/HomePagePreview";

// Register the preview for the "home" collection in config.yml
CMS.registerPreviewTemplate("home", HomePagePreview);
