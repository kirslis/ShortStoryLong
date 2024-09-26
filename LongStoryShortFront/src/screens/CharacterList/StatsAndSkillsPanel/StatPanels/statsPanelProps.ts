export const gap = "15px";

export const getModifier = (stat: number) => {
    let res = 0;
    if (stat > 0) {
        res = stat - 10;
        if (res < 0)
            res--
        res = Math.floor(res / 2);
    }
    return (
        res
    )
}

export interface IStatPanel {
    onModalOpen: () => void
}
