export interface INavItem {
  label: string;
  href?: string;
  subLabel?: string;
  children?: INavItem[];
}

export const LINKS = {
  creations: "/creations",
  explore: "/explore",
  create: "/create"
}

export const NAV_ITEMS: INavItem[] = [
  {
    label: "Creations",
    href: LINKS.creations,
  },
  {
    label: "Flows",
    href: LINKS.explore,
    children: [
      {
        label: "Explore",
        subLabel: "Check out popular community flows",
        href: LINKS.explore,
      },
      // {
      //   label: "Create ",
      //   subLabel: "Design new flows",
      //   href: LINKS.create,
      // },
    ],
  },
];