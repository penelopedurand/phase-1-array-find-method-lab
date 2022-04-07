// code your solution here
superbowlWin = (records) => {
    const result = records.find(record => record.result === "W")
        if (result) {
            return result.year
        }
}
