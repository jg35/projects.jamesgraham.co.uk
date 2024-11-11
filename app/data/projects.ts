function getProjectImgUrl(projectName: string, fileName: string) {
  return `/projects/${projectName
    .toLowerCase()
    .replaceAll(" ", "-")}/${fileName}`;
}

function mapProjectImages(
  projectName: string,
  images: { file: string; title: string }[]
) {
  return images.map(({ file, title }) => ({
    placement: "gallery",
    type: "image",
    url: getProjectImgUrl(projectName, file),
    title,
  }));
}

export type Project = (typeof projectData)[0];

const projectData = [
  {
    id: 1,
    title: "Stories To Tell",
    startDate: "2021-09-05",
    endDate: "2021-11-25",
    stage: "SHIPPED",
    status: "OFFLINE",
    description:
      "A memoir writing app that help users write and share their life stories",
    assets: [
      {
        placement: "card",
        type: "image",
        url: getProjectImgUrl("stories to tell", "stories-to-tell-card.png"),
        title: "Stories To Tell editor",
      },
      ...mapProjectImages("Stories to tell", [
        { file: "01-dashboard-desktop.png", title: "Dashboard screen" },
        // { file: "02-dashboard-mobile.png", title: "Dashboard - mobile" },
        { file: "03-edit.png", title: "Edit screen" },
        { file: "04-publish.png", title: "Publish - cover designer screen" },
        { file: "05-onboarding.png", title: "Onboarding - details screen" },
        { file: "06-onboarding-tutorial.png", title: "Onboarding - tutorial" },
        { file: "07-privacy-settings.png", title: "Privacy settings screen" },
        { file: "08-billing-settings.png", title: "Billing settings screen" },
        { file: "09-account-deletion.png", title: "Account deletion screen" },
      ]),
    ],
    technologies: [
      "Hasura",
      "GraphQL",
      "React",
      "Node.js",
      "Express",
      "Firebase",
    ],
    links: [
      {
        type: "",
        href: "",
        title: "",
      },
    ],
    styles: {
      colors: {
        gradient: "#efefeb",
      },
    },
    favoriteFeatures: [],
    learnings: [],
  },
  {
    id: 2,
    title: "Gigscout",
    startDate: "2022-03-11",
    endDate: "2022-04-11",
    stage: "SHIPPED",
    status: "OFFLINE",
    description: "Spotify playlist generator for indie gig goers in London",
    assets: [
      {
        placement: "card",
        type: "image",
        url: getProjectImgUrl("gigscout", "gigscout-card.png"),
        title: "Gigscout Homescreen",
      },
      ...mapProjectImages("Gigscout", [
        { file: "gigscout-desktop-design.png", title: "Listings overview" },
        {
          file: "gigscout-mobile-design-listings-overview.png",
          title: "Listings overview - mobile",
        },
        {
          file: "gigscout-mobile-design-venue-overview.png",
          title: "Listing details - mobile",
        },
      ]),
    ],
    technologies: ["Node.js", "Firebase", "Spotify API"],
    links: [
      {
        type: "",
        href: "",
        title: "",
      },
    ],
    styles: {
      colors: {
        gradient: "#f4fbf2",
      },
    },
    favoriteFeatures: [],
    learnings: [],
  },
  {
    id: 4,
    title: "Cook It",
    startDate: "2018-08-01",
    endDate: "2018-08-27",
    stage: "DEV",
    status: "OFFLINE",
    description:
      "Recipe discovery platform for ingredients that you already have at home",
    assets: [
      {
        placement: "card",
        type: "image",
        url: getProjectImgUrl("cook it", "cook-it-card.png"),
        title: "Choose ingredients screen",
      },
      ...mapProjectImages("Cook it", [
        { file: "01-splash.png", title: "Splash screen" },
        {
          file: "02-sign-up.png",
          title: "Sign up screen",
        },
        { file: "03-onboarding-step-1.png", title: "Onboarding - Step 1" },
        { file: "04-onboarding-step-2.png", title: "Onboarding - Step 2" },
        { file: "05-recipe-listings.png", title: "Recipe listings screen" },
        { file: "06-recipe-details.png", title: "Recipe details screen" },
      ]),
    ],
    technologies: ["Vue.js", "Feathers", "MongoDB"],
    links: [
      {
        type: "",
        href: "",
        title: "",
      },
    ],
    styles: {
      colors: {
        gradient: "#eaf2f8",
      },
    },
    favoriteFeatures: [],
    learnings: [],
  },
  {
    id: 5,
    title: "Tripnotes",
    startDate: "2016-06-01",
    endDate: "2016-09-01",
    stage: "DEV",
    status: "OFFLINE",
    description: "Adventure blogging platform for backpacking enthusiasts",
    assets: [
      {
        placement: "card",
        type: "image",
        url: getProjectImgUrl("tripnotes", "tripnotes-card.png"),
        title: "Tripnotes splash screen",
      },
      ...mapProjectImages("Tripnotes", [
        { file: "01-feed-following.png", title: "Feed - followed trips" },
        { file: "02-explore.png", title: "Explore trips" },
        { file: "03-trip-overview.png", title: "Trip overview screen" },
        { file: "04-my-account.png", title: "My account screen" },
        { file: "05-my-profile.png", title: "My profile screen" },
        { file: "06-my-trips.png", title: "My trips screen" },
      ]),
    ],
    technologies: ["AngularJS", "Express", "MongoDB"],
    links: [
      {
        type: "",
        href: "",
        title: "",
      },
    ],
    styles: {
      colors: {
        gradient: "#eaf2f8",
      },
    },
    favoriteFeatures: [],
    learnings: [],
  },
  {
    id: 6,
    title: "Football Planner",
    startDate: "2017-11-29",
    endDate: "2018-03-02",
    stage: "SHIPPED",
    status: "OFFLINE",
    description: "Football TV guide with watchlists and reminders",
    assets: [
      {
        placement: "card",
        type: "image",
        url: getProjectImgUrl("football planner", "football-planner-card.png"),
        title: "Football Planner dashboard",
      },
      ...mapProjectImages("Football Planner", [
        { file: "01-dashboard.png", title: "Dashboard screen" },
        { file: "02-dashboard-mobile.png", title: "Dashboard - mobile" },
        {
          file: "03-admin-approve-listing.png",
          title: "Admin - approve listing",
        },
        { file: "04-admin-edit-team.png", title: "Admin - edit team" },
      ]),
    ],
    technologies: ["Laravel", "Vue.js", "MySQL"],
    links: [
      {
        type: "",
        href: "",
        title: "",
      },
    ],
    styles: {
      colors: {
        gradient: "#f3f4f6",
      },
    },
    favoriteFeatures: [],
    learnings: [],
  },
  {
    id: 7,
    title: "Sherpa",
    startDate: "2016-01-01",
    endDate: "2016-03-01",
    stage: "SHIPPED",
    status: "OFFLINE",
    description: "Himilayan inspired todo app",
    assets: [
      {
        placement: "card",
        type: "image",
        url: getProjectImgUrl("sherpa", "sherpa-card.png"),
        title: "Sherpa todo list",
      },
      ...mapProjectImages("Sherpa", [
        {
          file: "01-sherpa-chrome-store.png",
          title: "Sherpa Chrome store listing",
        },
        { file: "02-auth-screen.png", title: "Auth screen" },
        { file: "03-todo-list-1.png", title: "Todo list 1" },
        { file: "04-todo-list-2.png", title: "Todo list 2" },
      ]),
    ],
    technologies: ["AngularJS", "Express", "MongoDB"],
    links: [
      {
        type: "",
        href: "",
        title: "",
      },
    ],
    styles: {
      colors: {
        gradient: "#EAF5F7",
      },
    },
    favoriteFeatures: [],
    learnings: [],
  },
];

projectData.sort((a, b) => (a.endDate > b.endDate ? -1 : 1));

export const projects = projectData;

export const getProjectColors = () =>
  projects.reduce<Record<string, string>>((acc, project) => {
    const projectGradientColorKey = `${getProjectSlug(project.title)}-gradient`;
    acc[projectGradientColorKey] = project.styles?.colors?.gradient || "#fff";
    return acc;
  }, {});

export const getProjectColorSafelist = (prefix: string) => {
  const keys = Object.keys(getProjectColors());
  return keys.map((key) => `${prefix}${key}`);
};

export const getProjectSlug = (title: string) => {
  return title.toLowerCase().replaceAll(" ", "-");
};
