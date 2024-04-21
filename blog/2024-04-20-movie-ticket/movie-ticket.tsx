import { BsArrowLeft } from 'react-icons/bs';
import GotGCover from './assets/gotg-cover.webp';
import { MdChevronRight, MdEventSeat, MdLocationPin } from 'react-icons/md';

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
    <div className='flex h-[70px] w-full items-center bg-[#EC417A] pr-[10px]'>
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

const SeatLegend = () => {
  return (
    <div className='flex w-full items-center justify-center gap-[10px] py-[15px]'>
      <div className='flex items-center gap-[5px] text-[8px]'>
        <MdEventSeat size={12} className='text-[#58899F]' />
        Available
      </div>
      <div className='flex items-center gap-[5px] text-[8px]'>
        <MdEventSeat size={12} className='text-[#CCD8DF]' />
        Booked
      </div>
      <div className='flex items-center gap-[5px] text-[8px]'>
        <MdEventSeat size={12} className='text-[#E83B73]' />
        Selected
      </div>
    </div>
  );
};
const SeatRow = ({
  letter,
  colors,
  right = false,
}: {
  letter: string;
  colors: number[];
  right?: boolean;
}) => {
  const getColor = (color: number) => {
    switch (color) {
      case 0:
        return '#58899F';
      case 1:
        return '#CCD8DF';
      case 2:
        return '#E83B73';
    }
  };

  return (
    <>
      {!right && <span className='text-end text-[8px]'>{letter}</span>}
      {colors.map((color, index) => (
        <MdEventSeat key={index} size={22} style={{ color: getColor(color) }} />
      ))}
      {right && <span className='text-start text-[8px] opacity-0' />}
    </>
  );
};
const SeatGrid = ({
  right = false,
  colors,
}: {
  right?: boolean;
  colors: number[][];
}) => {
  return (
    <div className='grid grid-cols-5 grid-rows-7 items-center justify-center gap-x-2'>
      <SeatRow letter='G' colors={colors[0]} right={right} />
      <SeatRow letter='F' colors={colors[1]} right={right} />
      <SeatRow letter='E' colors={colors[2]} right={right} />
      <SeatRow letter='D' colors={colors[3]} right={right} />
      <SeatRow letter='C' colors={colors[4]} right={right} />
      <SeatRow letter='B' colors={colors[5]} right={right} />
      <SeatRow letter='A' colors={colors[6]} right={right} />
    </div>
  );
};
const MovieScreenGraphic = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='208'
    height='16'
    viewBox='0 0 208 16'
    fill='none'
  >
    <g filter='url(#filter0_d_2_30627)'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M204.94 4.16705C205.071 4.32148 204.98 4.51411 204.738 4.59729C196.756 7.34005 183.012 9.69717 165.245 11.3706C147.477 13.044 126.484 13.9586 104.92 13.9986C83.3558 14.0387 62.1891 13.2024 44.0965 11.5956C26.004 9.98876 11.7983 7.68355 3.27575 4.97145C3.02968 4.89314 2.92972 4.70242 3.05247 4.54546C3.17523 4.38849 3.47421 4.32473 3.72028 4.40303C12.0941 7.0678 26.1689 9.36206 44.2339 10.9664C62.2725 12.5685 83.3917 13.4034 104.917 13.3634C126.443 13.3234 147.387 12.4104 165.099 10.7422C182.842 9.0711 196.443 6.72617 204.266 4.03805C204.508 3.95486 204.81 4.01262 204.94 4.16705Z'
        fill='#65898D'
      />
    </g>
    <defs>
      <filter
        id='filter0_d_2_30627'
        x='0'
        y='0'
        width='208'
        height='16'
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity='0' result='BackgroundImageFix' />
        <feColorMatrix
          in='SourceAlpha'
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feOffset dy='-1' />
        <feGaussianBlur stdDeviation='1.5' />
        <feComposite in2='hardAlpha' operator='out' />
        <feColorMatrix
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0'
        />
        <feBlend
          mode='normal'
          in2='BackgroundImageFix'
          result='effect1_dropShadow_2_30627'
        />
        <feBlend
          mode='normal'
          in='SourceGraphic'
          in2='effect1_dropShadow_2_30627'
          result='shape'
        />
      </filter>
    </defs>
  </svg>
);
const MovieScreenSection = () => (
  <div className='flex flex-col items-center py-[10px]'>
    <span className='mb-[-5px] text-[8px] font-semibold text-[#B8C3C4]'>
      Screen
    </span>
    <MovieScreenGraphic />
  </div>
);

const Body = () => {
  return (
    <div className='flex w-full flex-1 flex-col items-center text-black'>
      <SeatLegend />
      <div className='flex gap-[20px]'>
        <SeatGrid
          colors={[
            [0, 0, 0, 0],
            [0, 1, 1, 1],
            [0, 0, 0, 0],
            [0, 2, 2, 2],
            [0, 1, 1, 0],
            [1, 0, 1, 1],
            [0, 0, 0, 0],
          ]}
        />
        <SeatGrid
          right
          colors={[
            [0, 0, 0, 0],
            [0, 0, 1, 1],
            [0, 1, 1, 0],
            [0, 0, 0, 0],
            [1, 1, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
          ]}
        />
      </div>
      <MovieScreenSection />
    </div>
  );
};

export const MovieTicket = () => {
  return (
    <div className='flex h-[500px] w-full items-center justify-center bg-[#E8F2EF]'>
      <div className='flex h-[450px] w-[250px] flex-col overflow-hidden rounded-[6px] bg-white shadow-[0px_4px_20px_4px_rgba(0,0,0,0.25)]'>
        <Header />
        <Body />
        <Footer />
      </div>
    </div>
  );
};
