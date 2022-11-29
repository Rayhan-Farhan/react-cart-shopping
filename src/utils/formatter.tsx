const FORMATTER = new Intl.NumberFormat(undefined, {
    currency: "USD",
    style: "currency"
})

export function formatCur(number: number){
    return FORMATTER.format(number)
}