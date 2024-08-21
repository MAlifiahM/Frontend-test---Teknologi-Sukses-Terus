export const scrollToSection = (elementId: string) => {
    const element = document.getElementById(elementId);
    let offset = 83;
    if (elementId === "home") {
        offset = 150
    }
    let elementPosition : number = 0;
    let offsetPosition : number = 0;
    if (element != null) {
        elementPosition = element.getBoundingClientRect().top
        offsetPosition = elementPosition + window.scrollY - offset
    }

    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });
}