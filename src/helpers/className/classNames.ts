//cls - главный класс, mods - объект с модами, это объект у которого
// как ключ идёт название класса, а как значение какой то буллиан флаг.
// если флаг равен true мы класс добавляем, иначе удаляем
// additional -  массив допольнительных классов. Например отступы padding

//Record - специальный ts класс/тип, который обозначает, что в качестве
// ключа будет использоваться string, а в качестве значения либо boolean либо string
type Mods = Record<string, boolean | string>;
const obj: Mods = {
  hovered: '123',
};

export function classNames(cls: string, mods: Mods, additional: string[]): string {
  return [
    cls,
    ...additional,
    ...Object.entries(mods)
      .filter(([cls, value]) => Boolean(value))
      .map(([cls]) => cls),
  ].join(' ');
}

// classNames('remove-btn', { hovered: false, selectable: true, red: true }, ['pdg']);
