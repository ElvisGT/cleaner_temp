import fs from 'fs'
import path from 'path'


export const clearTemps = (paths: string[]) => {

    paths.forEach(item => {
        fs.readdir(item, (err, files) => {
            if (!err) {
                try {
                    files.forEach(subItem => {
                        const clearPath = path.join(item, '/', subItem)
                        if (subItem.split('.').length > 1) {
                            fs.unlinkSync(clearPath)
                        } else {
                            fs.rmSync(clearPath, {
                                recursive: true,
                                force: true

                            })
                        }
                    })
                } catch (err) {
                    console.log('Operacion no permitida')

                }
            }
        })
    })

}