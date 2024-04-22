import { getRandomAvatarUrl } from '@site/lib/utils';

const BirthdayListAvatar = ({ name }) => {
  const avatar = getRandomAvatarUrl(name);
  return <img src={avatar} alt={name} className='h-10 w-10 rounded-full' />;
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

export const BirthdayList = () => {
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
};
