import { getRandomAvatarUrl } from '@site/lib/utils';
import { HiOutlineArrowRight } from 'react-icons/hi2';

const AvatarCircle = ({ name }: { name: string }) => {
  const url = getRandomAvatarUrl(name);

  return (
    <img
      src={url}
      alt={name}
      className='aspect-square w-[50px] rounded-full border-[4px] border-white shadow-[0px_2px_8px_0px_rgba(0,0,0,0.25)]'
    />
  );
};
export const SocialLogin = () => {
  return (
    <div className='flex w-full items-center justify-center bg-[#F2F8FD] py-[60px]'>
      <div className='relative flex h-[250px] w-[600px] rounded-[16px] bg-[#DDE6F8] p-[10px]'>
        <div className='flex h-full w-full items-center justify-center rounded-[10px] bg-gradient-to-l from-[#1C3FB9] to-[#4F6DE1]'>
          <div className='flex w-[300px] flex-col items-center gap-[5px]'>
            <span className='w-full text-center text-[24px] font-semibold'>
              Already working together?
            </span>
            <span className='mb-[15px] w-[240px] text-center text-[12px]'>
              Log into your account and connect with your teammates!
            </span>
            <div className='relative flex w-full items-center justify-end'>
              <input
                className='w-full rounded-full border border-[#DDE6F8] bg-[#DDE6F8] bg-opacity-50 px-[16px] py-[8px] text-[12px] text-white placeholder:text-gray-200'
                placeholder='youremail@address.com'
              />
              <div className='pointer-events-none absolute inset-0 flex items-center px-[8px]'>
                <button className='pointer-events-auto z-10 ml-auto flex h-[24px] w-[24px] items-center justify-center rounded-full bg-white text-black'>
                  <HiOutlineArrowRight size={12} />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='pointer-events-none absolute inset-0 flex items-end justify-center'>
          <div className='flex translate-y-[40%] gap-[30px]'>
            <AvatarCircle name='John' />
            <AvatarCircle name='Janet' />
            <AvatarCircle name='James' />
            <AvatarCircle name='Cynthia' />
            <AvatarCircle name='Preston' />
          </div>
        </div>
      </div>
    </div>
  );
};
