interface Dev<T> {
    name: string;
    salary: number;
    device: {
        brand: string;
        model: string;
        releasedYear: string;
    };
    smartWatch?: T;
}
const poorDeveloper: Dev<{
    heartRate: string;
    stopwatch: boolean;
}> = {
    name: "X",
    salary: 20,
    device: {
        brand: "Xiaomi",
        model: "S33",
        releasedYear: "45"
    },
    smartWatch: {
        heartRate: "80",
        stopwatch: true,
    }

}

const RichDeveloper: Dev<{
    heartRate: string;
    stopwatch: boolean;
    callSupport: boolean;
    calculator: boolean;
}> = {
    name: "Y",
    salary: 25,
    device: {
        brand: "Samsung",
        model: "S26 Ultra",
        releasedYear: "2026"
    },
    smartWatch: {
        heartRate: "80",
        stopwatch: true,
        calculator: true,
        callSupport: true
    }

}