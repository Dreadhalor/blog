function BirthdayListNoAvatar() {
  const hslToRgb = (
    h: number,
    s: number,
    l: number,
  ): [number, number, number] => {
    s /= 100;
    l /= 100;
    const k = (n: number) => (n + h / 30) % 12;
    const a = s * Math.min(l, 1 - l);
    const f = (n: number) =>
      l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
    return [
      Math.trunc(255 * f(0)),
      Math.trunc(255 * f(8)),
      Math.trunc(255 * f(4)),
    ];
  };

  const rgbToHex = (r: number, g: number, b: number) =>
    ((r << 16) + (g << 8) + b).toString(16).padStart(6, '0');

  const hslToHex = (h: number, s: number, l: number) =>
    rgbToHex(...hslToRgb(h, s, l));

  const randomHexColor = (seed?: string) => {
    const hash = seed
      ? seed
          .split('')
          .reduce((acc, char) => char.charCodeAt(0) + ((acc << 5) - acc), 0)
      : Math.floor(Math.random() * 10000);
    const h = Math.abs(hash) % 360;
    const s = Math.floor(100);
    const l = Math.floor(50);
    return hslToHex(h, s, l);
  };

  const BirthdayListAvatar = ({ name }) => {
    const bg = randomHexColor(name);

    return (
      <img
        src={`https://api.dicebear.com/8.x/micah/svg?seed=${name}&backgroundColor=${bg}`}
        alt={name}
        className='h-10 w-10 rounded-full'
      />
    );
  };

  const BirthdayListItem = ({ name, age }) => {
    return (
      <div className='flex flex-nowrap items-center gap-2'>
        <BirthdayListAvatar name={name} />
        <div className='flex flex-col'>
          <span className='text-sm text-black'>{name}</span>
          <span className='text-xs text-gray-400'>{age} years</span>
        </div>
      </div>
    );
  };

  const BirthdayListList = () => {
    return (
      <div className='flex flex-col gap-2'>
        <BirthdayListItem name='Bertie Yates' age={29} />
        <BirthdayListItem name='Hester Hogan' age={32} />
        <BirthdayListItem name='Larry Little' age={36} />
        <BirthdayListItem name='Sean Walsh' age={34} />
        <BirthdayListItem name='Lola Gardner' age={29} />
      </div>
    );
  };

  return (
    <div className='flex h-[500px] w-full items-center justify-center bg-[#EF89B0] font-sans'>
      <div className='flex flex-col gap-5 rounded-md bg-white px-5 py-6 shadow-[35px_35px_20px_rgba(0,0,0,0.1)]'>
        <span className='text-md font-medium text-black'>
          24 birthdays today
        </span>
        <BirthdayListList />
        <button className='w-[180px] rounded-md border bg-gradient-to-r from-[#e66dd1] to-[#fd6aa9] py-2 text-sm font-bold text-white hover:brightness-105'>
          View all
        </button>
      </div>
    </div>
  );
}
