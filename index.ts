import fs from 'fs'
import path from 'path'

const clearTemps = (paths:string[]) => {
    paths.forEach(item => {
        fs.readdir(item,(err,files) => {
            if(!err){
                files.forEach(subItem => {
                   const clearPath = path.join(item,'/',subItem)
                    if(subItem.split('.').length > 1){
                    fs.unlinkSync(clearPath)
                   }else {
                    fs.rmSync(clearPath,{
                        recursive:true,
                        force:true
                    })
                   }
                })
            }
        })
    })
}

const main = () => {
    const pathFolders = ['C:/Windows/Temp']
    clearTemps(pathFolders)

}


main()