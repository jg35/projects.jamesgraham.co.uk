function randomizeUrl(url: string) {
  const minWidth = 300;
  const minHeight = 200;
  const maxWidth = 1600;
  const maxHeight = 900;

  const randomWidth =
    Math.floor(Math.random() * (maxWidth - minWidth + 1)) + minWidth;
  const randomHeight =
    Math.floor(Math.random() * (maxHeight - minHeight + 1)) + minHeight;

  const newUrl = url
    .replace(/1600/, randomWidth.toString())
    .replace(/900/, randomHeight.toString());
  return newUrl;
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
        url: "/stories-to-tell-card.png",
        title: "Stories To Tell editor",
      },
      {
        placement: "gallery",
        type: "image",
        url: randomizeUrl("https://placecats.com/1600/900"),
        title: "Stories To Tell editor",
      },
      {
        placement: "gallery",
        type: "image",
        url: randomizeUrl("https://placecats.com/1600/900"),
        title: "Stories To Tell editor",
      },
      {
        placement: "gallery",
        type: "image",
        url: randomizeUrl("https://placecats.com/1600/900"),
        title: "Stories To Tell editor",
      },
      {
        placement: "gallery",
        type: "image",
        url: randomizeUrl("https://placecats.com/1600/900"),
        title: "Stories To Tell editor",
      },
      {
        placement: "gallery",
        type: "image",
        url: randomizeUrl("https://placecats.com/1600/900"),
        title: "Stories To Tell editor",
      },
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
        url: "/gigscout-card.png",
        title: "Gigscout Homescreen",
      },
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
        url: "/cook-it-card.png",
        title: "Choose ingredients screen",
      },
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
        url: "/tripnotes-card.png",
        title: "Tripnotes splash screen",
      },
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
        url: "/football-planner-card.png",
        title: "Football Planner dashboard",
      },
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
        url: "/sherpa-card.png",
        title: "Sherpa todo list",
      },
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
