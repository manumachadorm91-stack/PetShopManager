export type ViewMode = 'list' | 'form';

export interface PetOwner {
  id: string;
  name: string;
}

export const SPECIES_OPTIONS = [
  { value: 'Perro', label: 'Perro' },
  { value: 'Gato', label: 'Gato' },
  { value: 'Ave', label: 'Ave' },
  { value: 'Pez', label: 'Pez' },
  { value: 'Roedor', label: 'Roedor' },
  { value: 'Reptil', label: 'Reptil' },
  { value: 'Otro', label: 'Otro' },
];

export const AGE_UNIT_OPTIONS = [
  { value: 'years', label: 'Años' },
  { value: 'months', label: 'Meses' },
];

export const PET_OWNERS: PetOwner[] = [
  { id: '1', name: 'Carlos Ramírez' },
  { id: '2', name: 'María González' },
  { id: '3', name: 'Ana Martínez' },
  { id: '4', name: 'Juan Rodríguez' },
  { id: '5', name: 'Laura Díaz' },
];
