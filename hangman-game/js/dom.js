export function DomSelectors() {
    return {
    wordDisplay: document.querySelector('#wordDisplay'),
    keys: Array.from(document.querySelectorAll('.key')),
    livesDisplay: document.querySelector('#livesDisplay'),
    };
}