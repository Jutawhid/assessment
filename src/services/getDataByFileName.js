import fs from 'fs';
/**
 * fs.readFile Asynchronously reads the entire contents of a file.
 * Read a file by file name
 * @param {string} fileName
 * Returns data of a file that name is passed to the function.
 */
export const getDataByFileName = (fileName) => {
    let result;
    return new Promise((resolve) => {
        fs.readFile(fileName, (err, data) => {
            if (err) {
                throw err;
            } else {
                result = JSON.parse(data);
                resolve(result);
            }
        });
    });
};
