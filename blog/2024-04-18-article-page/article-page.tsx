import { cn, getRandomAvatarUrl } from '@site/lib/utils';
import { FaChevronDown, FaSearch } from 'react-icons/fa';
import Hero from './assets/hero.jpg';
import Article1 from './assets/article-1.avif';
import Article2 from './assets/article-2.avif';
import Article3 from './assets/article-3.avif';

const pagePadding = 20;
const navButtonPadding = 12;
const categoryNavChipPaddingX = 15;

const NavMenuButton = ({
  children,
  chevron = false,
}: {
  children: React.ReactNode;
  chevron?: boolean;
}) => {
  return (
    <button
      className='font-navbar flex h-fit flex-nowrap items-center gap-[10px] text-nowrap'
      style={{
        padding: `${navButtonPadding}px`,
      }}
    >
      {children}
      {chevron && <FaChevronDown size={11} />}
    </button>
  );
};
const NavActionButton = ({
  children,
  primary = false,
  className = '',
}: {
  children: React.ReactNode;
  primary?: boolean;
  className?: string;
}) => {
  return (
    <button
      className={cn(
        'font-navbar flex h-fit items-center justify-center gap-[10px] text-nowrap rounded-full px-[24px] py-[12px]',
        primary && 'bg-black text-white',
        !primary && 'border border-black',
        className,
      )}
    >
      {children}
    </button>
  );
};
const CategoryNavChip = ({ children, selected = false }) => {
  return (
    <button
      className={cn(
        'font-chip flex h-fit items-center justify-center text-nowrap rounded-full',
        selected && 'bg-muted',
      )}
      style={{
        padding: `10px ${categoryNavChipPaddingX}px`,
      }}
    >
      {children}
    </button>
  );
};
const AuthorCard = ({ name }: { name: string }) => (
  <div className='text-caption flex items-center gap-[10px] text-nowrap'>
    <img
      className='aspect-square w-[40px] rounded-full'
      src={getRandomAvatarUrl(name)}
    />
    <span>{name}</span>
  </div>
);

const ArticleSide = () => (
  <div
    className='flex w-full flex-col'
    style={{
      gap: `${pagePadding}px`,
    }}
  >
    <img className='aspect-video w-full object-cover' src={Hero} />
    <span className='h2'>Little Things Do Make A Difference</span>
    <span className='text-body'>
      Why do you want to motivate yourself? Actually, just answering that
      question fully can be one of the better ways to get your daily motivation.
    </span>
    <AuthorCard name='Kathryn Shelton' />
  </div>
);
const RecentArticlesItem = ({
  title,
  author,
  image,
}: {
  title: string;
  author: string;
  image: string;
}) => (
  <div className='flex items-center' style={{ gap: pagePadding }}>
    <img className='aspect-square h-[120px] object-cover' src={image} />
    <div className='flex flex-col' style={{ gap: pagePadding / 2 }}>
      <span className='h2'>{title}</span>
      <AuthorCard name={author} />
    </div>
  </div>
);
const RecentArticlesSide = () => (
  <div
    className='flex w-full flex-1 flex-col'
    style={{
      gap: `${pagePadding}px`,
    }}
  >
    <span className='h2'>Recent Articles </span>
    <RecentArticlesItem
      title='Common Symbols And Their Meanings'
      author='Susie Russell'
      image={Article1}
    />
    <RecentArticlesItem
      title='Success Steps For Your Business'
      author='Connor Parsons'
      image={Article2}
    />
    <RecentArticlesItem
      title='The Strength Of Your Belief'
      author='Jonathan Yates'
      image={Article3}
    />
  </div>
);

export const ArticlePage = () => {
  const scale = 0.6;

  return (
    <div className='w-full overflow-hidden' style={{ height: 800 * scale }}>
      <div
        className='bg-background h-[800px] origin-top-left px-[80px] pt-[60px]'
        style={{
          transform: `scale(${scale})`,
          width: `calc(100% / ${scale})`,
        }}
      >
        <div
          className='flex h-full w-full flex-col rounded-t-[6px] bg-white text-black'
          style={{
            gap: `${pagePadding}px`,
          }}
        >
          <div
            className='border-border flex h-[100px] w-full items-center gap-[10px] border-b'
            style={{
              padding: `0 ${pagePadding}px 0 ${pagePadding - navButtonPadding}px`,
            }}
          >
            <NavMenuButton chevron>Product</NavMenuButton>
            <NavMenuButton>Pricing</NavMenuButton>
            <NavMenuButton chevron>Use Cases</NavMenuButton>
            <NavMenuButton>Blog</NavMenuButton>
            <NavActionButton className='ml-auto mr-[20px]'>
              Log In
            </NavActionButton>
            <NavActionButton primary>Get Started</NavActionButton>
          </div>
          <div
            className='flex flex-nowrap items-center gap-[10px]'
            style={{
              padding: `0 ${pagePadding}px 0 ${pagePadding - categoryNavChipPaddingX}px`,
            }}
          >
            <CategoryNavChip>Project</CategoryNavChip>
            <CategoryNavChip>Remote</CategoryNavChip>
            <CategoryNavChip>Teamwork</CategoryNavChip>
            <CategoryNavChip selected>Productivity</CategoryNavChip>
            <CategoryNavChip>Marketing</CategoryNavChip>
            <FaSearch className='ml-auto' size={18} />
          </div>
          <div
            className='flex w-full flex-1 flex-col'
            style={{
              padding: `${pagePadding / 2}px ${pagePadding}px`,
              gap: `${pagePadding}px`,
            }}
          >
            <span className='h1'>Productivity</span>
            <div
              className='grid grid-cols-2'
              style={{
                gap: `${2 * pagePadding}px`,
              }}
            >
              <ArticleSide />
              <RecentArticlesSide />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
