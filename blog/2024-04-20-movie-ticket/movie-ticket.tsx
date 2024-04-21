import { BsArrowLeft } from 'react-icons/bs';
import GotGCover from './assets/gotg-cover.webp';
import { MdChevronRight, MdLocationPin } from 'react-icons/md';

const Header = () => {
  return (
    <div className='relative h-[135px] w-full'>
      <img src={GotGCover} className='absolute inset-0 brightness-90' />
      <div
        className='absolute inset-0 flex flex-col justify-between px-[15px] py-[6px]'
        style={{
          background:
            'linear-gradient(76deg, #646399 0%, rgba(0, 0, 0, 0.00) 100%)',
        }}
      >
        <button>
          <BsArrowLeft size={24} />
        </button>
        <div className='flex flex-col items-start'>
          <span className='text-[10px] font-semibold'>
            Guardians of the Galaxy, Vol. 2
          </span>
          <span className='flex items-center gap-[2px] text-[8px]'>
            <MdLocationPin />
            Cineplex Entertainment, Toronto ON
          </span>
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className='flex h-[70px] w-full items-center bg-[#EC417A] pr-[6px]'>
      <div className='flex h-full w-[60px] flex-col justify-between bg-[#DC3669] py-[10px] pl-[12px] text-[10px] font-medium'>
        <span>Date</span>
        <span>Tickets</span>
        <span className='font-semibold'>TOTAL</span>
      </div>
      <div className='flex h-full flex-col justify-between py-[10px] pl-[12px] text-[10px] font-medium'>
        <span>Jul 11, 19:15</span>
        <span>3</span>
        <span className='font-semibold'>$31</span>
      </div>
      <button className='ml-auto flex h-fit items-center justify-center rounded-[10px] bg-white px-[20px] py-[15px] text-[12px] font-semibold text-black'>
        Next
        <MdChevronRight className='-mr-[8px]' size={20} />
      </button>
    </div>
  );
};

export const MovieTicket = () => {
  return (
    <div className='flex h-[500px] w-full items-center justify-center bg-[#E8F2EF]'>
      <div className='flex h-[450px] w-[250px] flex-col overflow-hidden rounded-[6px] bg-white shadow-[0px_4px_20px_4px_rgba(0,0,0,0.25)]'>
        <Header />
        <div className='flex-1' />
        <Footer />
      </div>
    </div>
  );
};
