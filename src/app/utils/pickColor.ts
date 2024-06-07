export const pickColor = (sectionId: number, power: string) => {
  const baseSectionClass = 'w-[90px] h-100 p-2 rounded-sm';
  let colorClass = '';
  switch (power) {
    case 'weak':
      colorClass = sectionId === 1 ? 'bg-red-500' : 'bg-gray-200';
      break;
    case 'normal':
      colorClass =
        sectionId === 1 || sectionId === 2 ? 'bg-yellow-500' : 'bg-gray-200';
      break;
    case 'strong':
      colorClass = 'bg-green-900';
      break;
    default:
      colorClass = 'bg-gray-200';
  }
  return baseSectionClass + ' ' + colorClass;
};
