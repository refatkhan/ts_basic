let anything: any;
anything = "stringForCheck"
console.log(anything)
const kgToGMConverter = (input: string | number): string | number | undefined => {
    if (typeof input === 'number') {
        const result = input * 1000;
        return result;
    } else if (typeof input === 'string') {
        const [value] = input.split(" ")
        return ` converted output is: ${Number(value) * 1000}`
    }
}

const result1 = kgToGMConverter(10) as number;
const result2 = kgToGMConverter("2 kg")
console.log({ result1 });
console.log({ result2 })