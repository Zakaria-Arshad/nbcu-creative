export const parseImageGridData = (imageJSONList) => {
    let res = [] // [[images, titles, alias], [images, titles, alias], ...]
    for (let i = 0; i < imageJSONList.length; i++) {
        for (let j = 0; j < imageJSONList[i].length; j++) {
            res.push([imageJSONList[i][j].image.url, imageJSONList[i][j].title, imageJSONList[i][j].alias])
        }
    }
    return res;
}
