export const hotFolderPathConfigJSON = {
    enable: true,
    pathConfig: [
        {
            id: 1,
            path: 'C:/IDP/ProjectName/Input1',
            batch: 'batch_name_undefined',
            schedule: 20,
            numberOfFileToAdd: {
                type: 'Single file',
                optionalSetting: {
                    fileName: 'textFile',
                    fileType: 'xml',
                    emptyFile: false,
                    inputFieldConfig_sample: null
                }
            }
        },
        {
            id: 2,
            path: 'C:/IDP/ProjectName/Input2',
            batch: 'batch_name_undefined',
            schedule: 60,
            numberOfFileToAdd: {
                type: 'All files',
                optionalSetting: {
                    fileName: 'endingFile',
                    fileType: 'xml',
                    emptyFile: false,
                    inputFieldConfig_sample: null
                }
            }
        }
    ]
}

