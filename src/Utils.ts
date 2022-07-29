export function toString(value: number) {
  return value.toLocaleString("pt-BR", { minimumFractionDigits: 2 });
}

export function toNumber(value: string) {
  return Number(value.replace(",", "."));
}