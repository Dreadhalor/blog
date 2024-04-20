import {
  IoAlarmOutline,
  IoCloseOutline,
  IoPauseOutline,
  IoStopwatchOutline,
} from 'react-icons/io5';
import { IoIosTimer } from 'react-icons/io';
import { AiOutlinePause } from 'react-icons/ai';

const TopNav = () => (
  <div className='grid h-[60px] w-full grid-cols-3'>
    <button className='flex flex-col items-center justify-center bg-[#0D9BBD] bg-opacity-70 text-[10px] hover:brightness-[103%]'>
      <IoAlarmOutline size={24} />
      Alarm
    </button>
    <button className='flex flex-col items-center justify-center bg-[#0D9BBD] text-[10px] hover:brightness-[103%]'>
      <IoIosTimer size={24} />
      Timer
    </button>
    <button className='flex flex-col items-center justify-center bg-[#0D9BBD] bg-opacity-70 text-[10px] hover:brightness-[103%]'>
      <IoStopwatchOutline size={24} />
      Alarm
    </button>
  </div>
);

const BottomButtons = () => (
  <div className='flex w-full items-center justify-center gap-[27px] py-[22px]'>
    <button className='flex aspect-square w-[55px] items-center justify-center rounded-full bg-[#ADFCE6] text-red-500 shadow-[0px_4px_15px_0px_rgba(0,0,0,0.25)] hover:brightness-110'>
      <IoCloseOutline size={36} />
    </button>
    <button className='flex aspect-square w-[55px] items-center justify-center rounded-full bg-[#ADFCE6] text-black shadow-[0px_4px_15px_0px_rgba(0,0,0,0.25)] hover:brightness-110'>
      <AiOutlinePause size={28} />
    </button>
  </div>
);

const TimerThinCircle = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='172'
    height='172'
    viewBox='0 0 172 172'
    fill='none'
  >
    <circle cx='86' cy='86' r='85' stroke='white' />
  </svg>
);
const TimerArc = () => (
  <svg
    className='absolute left-[42px]'
    xmlns='http://www.w3.org/2000/svg'
    width='149'
    height='174'
    viewBox='0 0 149 174'
    fill='none'
  >
    <path
      d='M147.104 147.104C137.22 156.988 125.051 164.282 111.674 168.34C98.2978 172.398 84.1271 173.094 70.4173 170.367C56.7076 167.64 43.882 161.574 33.0766 152.706C22.2712 143.838 13.8195 132.442 8.47024 119.528C3.12096 106.614 1.03918 92.5796 2.4093 78.6685C3.77941 64.7575 8.55914 51.3991 16.3251 39.7765C24.091 28.154 34.6035 18.626 46.9313 12.0367C59.2591 5.44735 73.0217 2 87 2'
      stroke='white'
      strokeWidth='3'
      strokeLinecap='round'
    />
  </svg>
);

const TimerEndBall = () => (
  <svg
    className='absolute bottom-[23px] right-[61px]'
    xmlns='http://www.w3.org/2000/svg'
    width='10'
    height='10'
    viewBox='0 0 10 10'
    fill='none'
  >
    <circle cx='5' cy='5' r='5' fill='white' />
  </svg>
);

const TimerBody = () => (
  <div className='flex w-full flex-1 flex-col items-center justify-center gap-[12px] pb-[25px] text-[20px] font-medium'>
    Timer
    <div className='relative flex w-full items-center justify-center'>
      <TimerThinCircle />
      <TimerArc />
      <TimerEndBall />
      <span className='absolute inset-0 flex items-center justify-center text-[32px] font-normal'>
        26:04
      </span>
    </div>
  </div>
);

export const Timer = () => {
  return (
    <div className='flex w-full items-center justify-center bg-[#1B88AA] py-8'>
      <div className='flex h-[456px] w-[256px] flex-col overflow-hidden rounded-[12px] bg-gradient-to-bl from-[#4ED2DF] to-[#60E5C1] shadow-[0px_4px_15px_2px_rgba(0,0,0,0.25)]'>
        <TopNav />
        <TimerBody />
        <BottomButtons />
      </div>
    </div>
  );
};
