import { sampleVideos } from "@/lib/sample-media";

export const projectCategories = [
  "Commercial & Brand Films",
  "Automotive Campaigns",
  "Product Photography",
  "Food & Restaurant Campaigns",
  "Events & Corporate Films",
  "Social Media Content",
  "Branding & Creative Campaigns",
  "Lifestyle Campaigns",
  "Digital Marketing & Campaign Strategy",
  "Behind-the-Scenes Production",
] as const;

export type ProjectCategory = (typeof projectCategories)[number];
export type ProjectLayout = "wide" | "portrait" | "square";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  discipline: string;
  image: string;
  imageAlt: string;
  secondImage: string;
  summary: string;
  objective: string;
  concept: string;
  marketing: string;
  deliverables: string[];
  layout: ProjectLayout;
  previewVideo?: { webm?: string; mp4?: string };
};

const image = (id: string, width: number) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;
const videoPoster = (id: number, name = `pexels-photo-${id}`) =>
  `https://images.pexels.com/videos/${id}/${name}.jpeg?auto=compress&dpr=1&h=750&w=1260`;

// Temporary portfolio concepts only. Replace each record and image with approved studio work.
// No clients, commissions, credits, or results are represented here.
export const projects: Project[] = [
  {
    slug: "built-for-the-night",
    title: "Built for the Night",
    category: "Automotive Campaigns",
    discipline: "Film concept · Direction · Production",
    image: videoPoster(13796181),
    imageAlt: "A dark sports car photographed as a premium automotive advertising campaign",
    secondImage: image("photo-1492144534655-ae79c964c9d7", 1400),
    summary: "Sample concept: a launch campaign for a performance-led automotive brand, built to make engineering feel visceral.",
    objective: "Make a considered performance vehicle feel immediate to a design-aware audience.",
    concept: "Treat the car as the lead character. Light, movement, and precise sound design reveal its shape before the full reveal.",
    marketing: "A hero film anchors a set of short edits for social, with product details and launch messaging carried consistently across formats.",
    deliverables: ["Hero commercial", "Short-form cutdowns", "Campaign stills", "Launch social toolkit"],
    previewVideo: { mp4: sampleVideos.automotive },
    layout: "wide",
  },
  {
    slug: "quietly-made",
    title: "Quietly Made",
    category: "Product Photography",
    discipline: "Still life · Art direction · Photography",
    image: videoPoster(4154241, "beauty-routine-cosmetic-product-cosmetics-essence-4154241"),
    imageAlt: "A close campaign frame of a fragrance ritual",
    secondImage: image("photo-1594035910387-fea47794261f", 1400),
    summary: "Sample concept: a close study of material, light, and detail, giving a considered object room to speak for itself.",
    objective: "Give a premium product a distinct visual signature across launch touchpoints.",
    concept: "Use macro details, controlled reflections, and a restrained palette to make craft the story.",
    marketing: "A stills-led concept supported by motion crops and product-first social formats.",
    deliverables: ["Product film", "Campaign stills", "Social cutdowns"],
    previewVideo: { mp4: sampleVideos.product },
    layout: "portrait",
  },
  {
    slug: "around-the-table",
    title: "Around the Table",
    category: "Food & Restaurant Campaigns",
    discipline: "Campaign concept · Food styling · Photography",
    image: videoPoster(4661944),
    imageAlt: "A richly lit restaurant burger photographed for a food campaign",
    secondImage: image("photo-1555939594-58d7cb561ad1", 1400),
    summary: "Sample concept: an appetite-led restaurant campaign with tactile close-ups, warm light, and a little theatre.",
    objective: "Make a signature menu item feel like a reason to visit.",
    concept: "A sensory film built from texture, heat, and the small rituals around a shared meal.",
    marketing: "A central campaign edit is adapted into vertical hooks and menu-led social content.",
    deliverables: ["Food campaign film", "Menu photography", "Vertical social edits"],
    previewVideo: { mp4: sampleVideos.food },
    layout: "square",
  },
  {
    slug: "room-to-gather",
    title: "Room to Gather",
    category: "Events & Corporate Films",
    discipline: "Event film concept · Camera · Edit",
    image: videoPoster(12695733),
    imageAlt: "An audience gathered beneath dramatic stage lighting",
    secondImage: image("photo-1492684223066-81342ee5ff30", 1400),
    summary: "Sample concept: a people-first event film that carries the energy of being there into the next room.",
    objective: "Extend the energy of a live gathering beyond the room and event date.",
    concept: "Capture anticipation, scale, and human moments as one fast-moving story.",
    marketing: "A same-day social edit creates momentum, with a longer recap supporting future event promotion.",
    deliverables: ["Event highlight film", "Social recap", "Speaker and atmosphere edits"],
    previewVideo: { mp4: sampleVideos.event },
    layout: "square",
  },
  {
    slug: "made-for-the-scroll",
    title: "Made for the Scroll",
    category: "Social Media Content",
    discipline: "Short-form concept · Motion · Photography",
    image: videoPoster(7594023, "adult-blur-breakfast-cooking-7594023"),
    imageAlt: "A freshly made coffee presented in warm morning light",
    secondImage: image("photo-1511920170033-f8396924c348", 1400),
    summary: "Sample concept: a flexible set of short-form social stories, designed to feel native in the feed and rich up close.",
    objective: "Create a recognizable content rhythm that gives audiences a reason to stop and return.",
    concept: "Build a repeatable visual format around close details, quick reveals, and an unmistakable opening beat.",
    marketing: "A modular short-form system supports regular publishing and testing across social placements.",
    deliverables: ["Short-form video series", "Social stills", "Content format guide"],
    previewVideo: { mp4: sampleVideos.verticalFood },
    layout: "portrait",
  },
  {
    slug: "a-different-everyday",
    title: "A Different Everyday",
    category: "Branding & Creative Campaigns",
    discipline: "Campaign concept · Creative direction · Stills",
    image: image("photo-1556228578-0d85b1a4d571", 1400),
    imageAlt: "A minimal beauty product arrangement in soft, directional light",
    secondImage: image("photo-1602143407151-7111542de6e8", 1400),
    summary: "Sample concept: a campaign world built from a clear visual point of view, carried across image, message, and motion.",
    objective: "Make an emerging care brand feel ownable and coherent across launch channels.",
    concept: "A distinctive visual language pairs clean product studies with candid everyday rituals.",
    marketing: "Campaign messages and creative are organized around awareness, product education, and launch consideration.",
    deliverables: ["Campaign concept", "Visual identity direction", "Launch assets", "Social content system"],
    layout: "portrait",
  },
  {
    slug: "between-takes",
    title: "Between Takes",
    category: "Behind-the-Scenes Production",
    discipline: "Behind-the-scenes concept · Production stills",
    image: videoPoster(8089117, "actors-crew-director-diversity-8089117"),
    imageAlt: "A small creative crew collaborating around a table",
    secondImage: image("photo-1516321318423-f06f85e504b3", 1400),
    summary: "Sample concept: an honest look at the people, decisions, and small in-between moments that make a production.",
    objective: "Give an audience a human view into how a campaign comes together.",
    concept: "A supporting documentary-style edit follows the collaboration behind the finished work.",
    marketing: "Behind-the-scenes clips can extend a campaign story and give social channels useful in-between content.",
    deliverables: ["Set diary film", "Crew portraits", "Social clips"],
    previewVideo: { mp4: sampleVideos.production },
    layout: "wide",
  },
  {
    slug: "the-everyday-edit",
    title: "The Everyday Edit",
    category: "Lifestyle Campaigns",
    discipline: "Lifestyle film · Campaign direction · Social",
    image: videoPoster(19862866, "beauty-model-black-model-black-models-face-model-19862866"),
    imageAlt: "A fashion campaign portrait with a strong editorial point of view",
    secondImage: image("photo-1534528741775-53994a69daeb", 1400),
    summary: "Sample concept: an editorial lifestyle campaign connecting a brand with the people and everyday rituals around it.",
    objective: "Build an emotional connection with an audience through recognizable moments and a confident point of view.",
    concept: "A cast-led campaign moves between composed fashion frames and spontaneous motion.",
    marketing: "Hero storytelling is extended into vertical edits and platform-native campaign assets.",
    deliverables: ["Lifestyle campaign film", "Editorial stills", "Short-form cutdowns"],
    previewVideo: { mp4: sampleVideos.fashion },
    layout: "portrait",
  },
  {
    slug: "made-to-be-seen",
    title: "Made to Be Seen",
    category: "Branding & Creative Campaigns",
    discipline: "Brand platform · Art direction · Campaign assets",
    image: image("photo-1602143407151-7111542de6e8", 1800),
    imageAlt: "A cleanly art-directed beverage product campaign image",
    secondImage: image("photo-1543255006-d6395b6f1171", 1400),
    summary: "Sample concept: a visual platform for a new beverage brand, designed to travel from first impression through everyday content.",
    objective: "Create a memorable and flexible identity for a new product entering a crowded category.",
    concept: "A bold color system and graphic product framing create a world that feels energetic without losing clarity.",
    marketing: "The brand platform guides launch messaging, creator-ready assets, and paid social creative variations.",
    deliverables: ["Campaign platform", "Art direction", "Launch film and stills", "Paid social variations"],
    layout: "square",
  },
  {
    slug: "a-brand-in-motion",
    title: "A Brand in Motion",
    category: "Commercial & Brand Films",
    discipline: "Brand film · Creative direction · Production",
    image: image("photo-1556228578-0d85b1a4d571", 1800),
    imageAlt: "A cinematic campaign frame for a contemporary care brand",
    secondImage: image("photo-1602143407151-7111542de6e8", 1400),
    summary: "Sample concept: a brand film that turns a product's point of view into a human story, then carries it through a launch campaign.",
    objective: "Build recognition for a new brand by making its point of view easy to understand and remember.",
    concept: "A character-led film pairs tactile product details with a simple emotional arc.",
    marketing: "The hero story informs cutdowns, campaign copy, and paid placement variations for launch.",
    deliverables: ["Brand film", "Campaign platform", "Social cutdowns", "Paid media creative"],
    layout: "wide",
  },
  {
    slug: "in-good-company",
    title: "In Good Company",
    category: "Digital Marketing & Campaign Strategy",
    discipline: "Content strategy · Campaign architecture · Paid social creative",
    image: image("photo-1495474472287-4d71bcdd2085", 1800),
    imageAlt: "A coffee campaign concept used to illustrate a coordinated content system",
    secondImage: image("photo-1511920170033-f8396924c348", 1400),
    summary: "Sample concept: a campaign system that connects a hospitality brand's story to the content formats and messages its audience sees.",
    objective: "Create a coherent campaign plan that gives a small set of creative ideas multiple useful placements.",
    concept: "One visual idea moves across an editorial hero, short video, product-focused ads, and community-led posts.",
    marketing: "The illustrative plan maps awareness, consideration, and visit-intent messages without implying real campaign results.",
    deliverables: ["Campaign strategy board", "Content calendar concept", "Paid social variations", "Creative testing plan"],
    layout: "wide",
  },
];

export const categories = ["All", ...projectCategories] as const;

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
