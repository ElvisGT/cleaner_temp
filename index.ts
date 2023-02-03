import { clearTemps } from "./clearTemps"



const main = () => {
    const pathFolders = ['C:/Windows/Temp', 
                        'C:/Users/Elvis-PC/AppData/Local/Temp',
                        'C:/Windows/Prefetch']
    clearTemps(pathFolders)

}


main()