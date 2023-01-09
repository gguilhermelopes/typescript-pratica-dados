/**
 * Recebe string '1.650,50' retorna number: 1650.50
 */
export default function moedaParaNumero(moeda: string): number | null {
  const numero = +moeda.replaceAll(".", "").replace(",", ".");
  return isNaN(numero) ? null : numero;
}
