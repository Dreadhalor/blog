import TheLastJediPoster from './the-last-jedi-poster.jpg';

const MovieCardHeader = () => {
  return (
    <div className='flex w-full flex-col'>
      <div className='flex items-start justify-between'>
        <span className='text-xl font-semibold'>Star Wars: The Last Jedi</span>
        <span className='text-[10px] text-gray-400'>
          <span className='font-bold text-blue-500'>7.4</span> / 10
        </span>
      </div>
      <span className='text-[10px] text-blue-500'>Action & Adventure</span>
    </div>
  );
};

const CreditsLink = ({ children }) => (
  <a href='#' className='text-[10px] text-blue-500'>
    {children}
  </a>
);

type CreditsSectionProps = {
  title: string;
  names: string[];
  children?: React.ReactNode;
};
const CreditsSection = ({ title, names, children }: CreditsSectionProps) => (
  <div className='flex flex-col text-nowrap'>
    <span className='mb-1 text-xs font-bold'>{title}</span>
    {names.map((name: string) => (
      <CreditsLink key={name}>{name}</CreditsLink>
    ))}
    {children}
  </div>
);

const MovieCardContent = () => {
  return (
    <div className='flex w-full flex-1 gap-4'>
      <div className='flex w-[120px] shrink-0 grow-0 flex-col justify-between text-[10px]'>
        <img src={TheLastJediPoster} className='aspect-[2/3] w-full' />
        <div className='mt-4 flex w-full items-center justify-between font-bold'>
          <span>$19.00</span>
          <button className='flex h-[20px] w-[50px] items-center justify-center rounded-full border border-black p-0 hover:bg-gray-200'>
            BUY
          </button>
        </div>
      </div>
      <div className='flex flex-col text-[10px]'>
        <span className='mb-1 text-sm font-bold'>About the movie</span>
        <span>
          In Lucasfilm's Star Wars: The Last Jedi, the Skywalker saga continues
          as the heroes of The Force Awakens join the galactic legends in an
          epic adventure that unlocks new mysteries of the Force and shocking
          revelations of the past.
        </span>
        <div className='mt-3 grid grid-cols-3'>
          <CreditsSection
            title='Actors'
            names={[
              'Oscar Isaac',
              'Daisy Ridley',
              'John Boyega',
              'Kelly Marie Tran',
            ]}
          >
            <a href='#' className='mt-2 text-[10px] text-blue-500 underline'>
              More
            </a>
          </CreditsSection>
          <div className='flex flex-col gap-3'>
            <CreditsSection title='Director' names={['Rian Johnson']} />
            <CreditsSection title='Screenwriter' names={['Rian Johnson']} />
          </div>
          <CreditsSection
            title='Producers'
            names={['Kathleen Kennedy', 'Ram Bergman']}
          />
        </div>
        <WatchTrailerButton />
      </div>
    </div>
  );
};

const WatchTrailerButton = () => (
  <button className='group mt-auto flex h-[20px] w-[116px] items-center justify-end gap-1 self-end justify-self-end rounded-full bg-black p-0 text-[10px] font-normal text-white hover:bg-gray-700'>
    WATCH TRAILER
    <div className='flex aspect-square h-full items-center justify-center rounded-full border border-black bg-white text-black group-hover:text-gray-700'>
      <svg
        stroke='currentColor'
        fill='currentColor'
        strokeWidth='0'
        viewBox='0 0 448 512'
        xmlns='http://www.w3.org/2000/svg'
        className='aspect-square h-3'
      >
        <path d='M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z'></path>
      </svg>
    </div>
  </button>
);

export const MovieCard = () => {
  return (
    <div className='flex aspect-[4/3] w-full items-center justify-center bg-[#f4f7fb] p-12'>
      <div className='flex flex-col gap-4 bg-white p-10 text-black shadow-lg'>
        <MovieCardHeader />
        <MovieCardContent />
      </div>
    </div>
  );
};
