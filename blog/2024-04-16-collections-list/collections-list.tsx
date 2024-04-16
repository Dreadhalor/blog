import {
  People1,
  People2,
  People3,
  People4,
  Nature1,
  Nature2,
  Nature3,
  Nature4,
  History1,
  History2,
  History3,
  History4,
} from './images';

const CollectionsListLiButton = ({ children }) => {
  return (
    <button className='rounded-lg bg-white px-2 py-2 text-xs font-medium hover:bg-gray-50'>
      {children}
    </button>
  );
};

const CollectionCardThumbnail = ({ src }) => {
  return <img src={src} className='h-[45px] w-full rounded-lg object-cover' />;
};
const CollectionCard = ({ name, num, images }) => {
  return (
    <div className='flex flex-col gap-2 rounded-xl bg-white p-3'>
      <img
        src={images[0]}
        className='h-[150px] w-full rounded-lg object-cover'
      />
      <div className='grid grid-cols-3 gap-2'>
        <CollectionCardThumbnail src={images[1]} />
        <CollectionCardThumbnail src={images[2]} />
        <CollectionCardThumbnail src={images[3]} />
      </div>
      <div className='mt-1 flex items-center justify-between text-xs font-medium'>
        <span>{name}</span>
        <div className='flex items-center gap-1'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-4 w-4'
            viewBox='0 0 24 24'
            strokeWidth='2'
            stroke='currentColor'
            fill='none'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
            <path d='M15 8h.01'></path>
            <path d='M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z'></path>
            <path d='M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5'></path>
            <path d='M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3'></path>
          </svg>
          <span>{num}</span>
        </div>
      </div>
    </div>
  );
};

export const CollectionsList = () => {
  return (
    <div className='relative flex h-[600px] w-full items-center justify-center bg-[#d8d9e2] px-5 text-black'>
      <div className='absolute right-[20%] top-10 aspect-square w-[150px] rounded-full bg-[#e5e8f0]'></div>
      <div className='absolute bottom-6 left-[15%] aspect-square w-[200px] rounded-full bg-[#e5e8f0]'></div>
      <div className='z-10 flex w-full flex-col gap-4 rounded-xl bg-[#eef0f2] p-6 shadow-[0px_30px_10px_rgba(0,0,0,0.1)]'>
        <span className='font-bold'>Popular Collections</span>
        <div className='flex flex-nowrap items-center gap-2'>
          <CollectionsListLiButton>Profile</CollectionsListLiButton>
          <CollectionsListLiButton>New York</CollectionsListLiButton>
          <CollectionsListLiButton>Relaxing</CollectionsListLiButton>
          <CollectionsListLiButton>Person</CollectionsListLiButton>
          <CollectionsListLiButton>Fashion</CollectionsListLiButton>
        </div>
        <div className='grid grid-cols-3 gap-5'>
          <CollectionCard
            name='People'
            num='144'
            images={[People1, People2, People3, People4]}
          />
          <CollectionCard
            name='Nature'
            num='7k'
            images={[Nature1, Nature2, Nature3, Nature4]}
          />
          <CollectionCard
            name='History'
            num='431'
            images={[History1, History2, History3, History4]}
          />
        </div>
      </div>
    </div>
  );
};
