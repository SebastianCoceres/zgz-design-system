/**
 * Convierte un objeto en una cadena de consulta.
 *
 * @param {T extends Record<string, any>} params - El objeto a convertir.
 * @return {string} - La cadena de consulta.
 */
export function objectToQueryString<T extends Record<string, any>>(
  params: T,
): string {
  return Object.entries(params)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`,
    )
    .join('&');
}
