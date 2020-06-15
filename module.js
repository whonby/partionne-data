export const partition=(items, size)=> {
    var result = items.reduce((resultArray, item, index) => {
        const chunkIndex = Math.floor(index/size)

        if(!resultArray[chunkIndex]) {
            resultArray[chunkIndex] = []
        }

        resultArray[chunkIndex].push(item)

        return resultArray
    }, []);
    return result
};




