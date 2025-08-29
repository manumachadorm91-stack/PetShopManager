/**
 * Formatea la edad de una mascota según su unidad
 */
export function formatAge(age: number | null | undefined, ageUnit: string): string {
  if (age === null || age === undefined) return 'N/A';
  
  const unit = ageUnit === 'years' ? 'años' : 'meses';
  return `${age} ${unit}`;
}

/**
 * Formatea peso en kilogramos
 */
export function formatWeight(weight: number | null | undefined): string {
  if (weight === null || weight === undefined) return 'N/A';
  return `${weight} kg`;
}

/**
 * Truncar texto largo
 */
export function truncateText(text: string | null | undefined, maxLength = 50): string {
  if (!text) return '';
  return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
}
