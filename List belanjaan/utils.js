export function Tampilin(belanjaan) {
  if (typeof belanjaan !== 'string') {
    throw new Error('Error: Terdapat bukan String :(');
  }
  return belanjaan;
}
