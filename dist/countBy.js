export default function countBy(arr) {
    return arr.reduce((a, b) => {
        if (a[b]) {
            a[b] += 1;
        }
        else {
            a[b] = 1;
        }
        return a;
    }, {});
}
//# sourceMappingURL=countBy.js.map