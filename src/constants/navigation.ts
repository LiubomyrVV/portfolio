interface NavigationItem {
    name: string;
    position: number;
    isInNav?: boolean;
    isInNavSection?: boolean; // Optional property
  }
const NAVIGATION: NavigationItem[] = [
    {
        name: 'Nagłówek',
        position: 0,
        isInNavSection: false,
    },
    {
        name: 'Główna',
        position: 102,
        isInNavSection: false,
    },
    {
        name: 'O mnie',
        position: 918,
    },
    {
        name: 'Doświadczenie',
        position: 1836,
    },
    {
        name: 'Projekty',
        position: 2754,
    },
    {
        name: 'Kontakt',
        position: 3303,
    },
]
export default NAVIGATION;