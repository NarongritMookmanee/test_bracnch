import cron from 'node-cron'
import { hotFolderPathConfigJSON as data } from './data.js'
import { existsSync, mkdir, read, readFileSync} from 'node:fs'

const project = 'IDP Project'
const taskArray = []

// console.dir(data, { depth: '*' })
data.pathConfig.forEach(task => {
    if (data.enable) {
        task.project = 'IDP Demo'
        task.schedulingImplementation = cron.schedule(`*/${task.schedule} * * * * *`, () => {
            if (existsSync(task.path)) {
                console.log('found')
            } else {
                console.log('not found')
                mkdir(task.path, { recursive: true }, (err) => {
                    if (err) throw err;
                })
            }
            const file = readFileSync('./folder_dummy/Test_10001694_2400000000095288.pdf')
            console.log(file)
            //                                  <<< algorithm file classifier >>>
            //------------------------------------------------------------------------------------------------------
            //      - single file
            //          - create batch repositories
            //          - get existing file(s) to array
            //          - add all file(s) to queue according nunning number of each file(s) counting
            //      - all files
            //          - create batch repositories
            //          - get existing file(s) to array
            //          - add all array file(s) to queue
            //      - according to description files
            //          - if found file
            //              - if empty file is true
            //                  - create batch repositories
            //                  - add to queue
            //              - else
            //                  - read xml to json
            //                      - if found file according conifg
            //                          - get according json config
            //                          - create batch repositories
            //                          - add to queue
            //                      - else
            //                          - waiting...
            //------------------------------------------------------------------------------------------------------

        }, {
            scheduled: true
        })
    }
    // console.dir(data, { depth: '3' })
});
//test