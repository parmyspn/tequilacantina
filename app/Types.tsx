export interface MenuItem {
  name: string;
  description?: string;
  price: number;
  addOn?: AddOn[];
}

export interface AddOn {
  description: string;
  price: number;
}

export interface Section {
  title: string;
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
