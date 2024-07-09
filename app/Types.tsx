export interface MenuItem {
  name: string;
  description?: string;
  price?: number;
  prices?: number[];
  addOn?: AddOn[];
  restrictions?: string;
}

export interface AddOn {
  description: string;
  price: number;
}

export interface Section {
  title: string;
  subTitle?: SubTitle;
  menuItems: MenuItem[];
}

export interface MenuTab {
  id: number;
  name: string;
  sections: Section[];
}

export interface Menu {
  menuTabs: MenuTab[];
}

export interface SubTitle {
  title: string;
  size: string[];
}
