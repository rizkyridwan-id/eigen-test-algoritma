exports.searchLongest = function (sentence) {
    const sentenceArray = sentence.split(" ")
    const answerIndex = [sentenceArray[0], sentenceArray[0].length]

    for(let i = 0; i < sentenceArray.length; i++) {
        for(let j = i+1; j < sentenceArray.length; j++) {
            const vJ = sentenceArray[j]

            if(vJ && vJ.length > answerIndex[1]) {
                answerIndex[0] = vJ
                answerIndex[1] = vJ.length
            }
        }
    }

    return `${answerIndex[0]}: ${answerIndex[1]} character`
}