import { readFileSync, writeFileSync, accessSync } from 'fs';

const filePath = `${process.cwd()}/data/articles.json`;

console.log(filePath);

const getFileContents = () => {
    try {
        accessSync(filePath);

        return JSON.parse(readFileSync(filePath, 'utf8'));
    } catch (err) {
        console.error(err);
    }

    return '';
}
const saveFile = (newContent) => {
    try {
        accessSync(filePath);

        writeFileSync(filePath, newContent);
    } catch (err) {
        console.error(err);
    }
}

const storeArticle = (data) => {
    // get the data
    const existingData = getFileContents();

    // append to it the new article
    const newData = existingData.push(data)

    // save the new data
    saveFile(newData);
}


export { storeArticle };