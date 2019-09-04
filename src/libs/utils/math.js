export const getRandomNumber = (max) => {   
    return Math.floor((Math.random() * max));
}
export function getNextRoundRobin(total, current) {
    return (current < total - 1) ? (current + 1) : 0;
    }
