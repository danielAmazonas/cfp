const months = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
];

function getYearMonths() {
  const yearMonths = [];
  let years = [
    new Date().getFullYear() - 1,
    new Date().getFullYear(),
    new Date().getFullYear() + 1,
  ];
  for (const year of years) {
    for (let i = 1; i <= 12; i++) {
      const key = `${year}-${i.toString().padStart(2, 0)}`;
      const value = `${months[i - 1]}/${year}`;
      yearMonths.push({ key, value });
    }
  }
  return yearMonths;
}

function getToday() {
  const year = new Date().getFullYear();
  const month = (new Date().getMonth() + 1).toString().padStart(2, '0');
  return `${year}-${month}`;
}

export { getYearMonths, getToday };
