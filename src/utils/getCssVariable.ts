export const getCssVariable = (name: string) =>
    getComputedStyle(document.documentElement).getPropertyValue(name).trim();