export function DomSelectors() {
    return {
    wordDisplay: documentquerySelector('#wordDisplay'),
    keys: Array.from(document.querySelectorAll('.key')),
    livesDisplay: document.querySelector('#livesDisplay'),
    };
}