import parse from 'html-react-parser';

export const convertHeaderToTextArray = (htmlString) => {
    const textArray = [];

    parse(htmlString, {
        replace: (domNode) => {
            if (domNode.type === 'tag' && domNode.children && domNode.children.length){
                domNode.children.forEach(child => {
                    if (child.type === 'text') {
                        textArray.push(child.data);
                    } 
                })
            }
        }
    })

    return textArray;
}