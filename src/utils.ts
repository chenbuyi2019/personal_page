
/** 
 * 打乱一个数组的顺序
 **/
function disorderArray(v: Array<any>): void {
    if (v.length < 2) { return }
    const n = []
    while (v.length > 0) {
        const index = Math.floor(Math.random() * v.length)
        const obj = v.splice(index, 1)[0]
        n.push(obj)
    }
    v.push(...n)
}
