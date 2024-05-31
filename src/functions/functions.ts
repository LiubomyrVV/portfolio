import NAVIGATION from "../constants/navigation"


export const getPositionByName = (searchTerm: string) => 
    NAVIGATION.find(({ name }) => name === searchTerm)?.position
