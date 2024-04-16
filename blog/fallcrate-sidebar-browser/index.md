# Sidebar File Browser

We'll start this off by abstracting a new component for this right out of the gate.

Let's create the new component at `src/components/sidebar-file-browser/sidebar-file-browser.tsx`, since I'm expecting to have more dedicated components inside of that file browser & it would be nice to group them together.

While we're at it, let's just group together the previous BrowseActionBar & BrowseActionBarButton files into `src/components/browse-action-bar` as well.

<!-- truncate -->

Okay, now let's put in some boilerplate with `rafc`:

```tsx
// src/components/sidebar-file-browser/sidebar-file-browser.tsx
import React from 'react';

export const SidebarFileBrowser = () => {
  return <div>SidebarFileBrowser</div>;
};
```

& we'll import the new SidebarFileBrowser into the root page.tsx & make the sidebar div a `flex-col`:

```tsx
// src/app/page.tsx
import { BrowseActionBar } from '@/components/browse-action-bar/browse-action-bar';
import { SidebarFileBrowser } from '@/components/sidebar-file-browser/sidebar-file-browser';

const Page = () => {
  return (
    <div className='flex h-full border-4 border-blue-600'>
      <div className='flex w-[240px] flex-col border-4'>
        SIDEBAR
        <SidebarFileBrowser />
      </div>
      <div className='flex-1 flex-col border-4'>
        <BrowseActionBar />
        MAIN CONTENT
      </div>
    </div>
  );
};

export default Page;
```

Perfect. Now additional code snippets can come from the SidebarFileBrowser file without needing to re-state too much code. Okay, now let's throw a border on it since we're in early dev & make it `flex-1`.

Okay, with some styling here's where we're at. It's looking good:

```tsx
// src/components/sidebar-file-browser/sidebar-file-browser.tsx
import React from 'react';
import { Button } from '@ui/button';

export const SidebarFileBrowser = () => {
  return (
    <div className='flex-1 border-2 border-blue-500'>
      <Button className='w-full justify-start rounded-none bg-transparent px-[16px] py-[6px] text-white hover:bg-gray-800'>
        All Files
      </Button>
    </div>
  );
};
```

I do notice, however that the button is technically the trigger to an accordion that shows/hides the file browser. So let's look back to shadcn/ui & add the `Accordion` primitives.

`pnpm dlx shadcn-ui@latest add accordion`

& with the component installed, now the move is to once again grab the simplest example on the documentation page, copy+paste the code, then modify it to suit our purposes. Here's the first example on the [page for the accordion primitive:](https://ui.shadcn.com/docs/components/accordion)

```tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export function AccordionDemo() {
  return (
    <Accordion type='single' collapsible className='w-full'>
      <AccordionItem value='item-1'>
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-2'>
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-3'>
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It's animated by default, but you can disable it if you prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
```

Okay, now let's analyze. It looks like this `Accordion` has multiple `AccordionItem` elements, & we only need one. So let's change that & throw it right under our button to see how it looks.

```tsx
// src/components/sidebar-file-browser/sidebar-file-browser.tsx
import React from 'react';
import { Button } from '@ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@ui/accordion';

export const SidebarFileBrowser = () => {
  return (
    <div className='flex-1 border-2 border-blue-500'>
      <Button className='w-full justify-start rounded-none bg-transparent px-[16px] py-[6px] text-white hover:bg-gray-800'>
        All Files
      </Button>
      <Accordion type='single' collapsible className='w-full'>
        <AccordionItem value='all-files'>
          <AccordionTrigger>All Files</AccordionTrigger>
          <AccordionContent>Woo, it is a content</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
```

Okay, the good news is it functions. The bad news is it doesn't look right. We can make some changes, but you may notice that we never actually specified anything about the caret. So it would appear that shadcn/ui both made the executive decision to put the caret on the right side of the trigger, as well as alternate only between facing up & facing down. We want this to look differently in 2 ways:

1. Put the caret on the left
2. Point the caret to the right when the folder is closed, & down when the folder is open.

& also as a side note,

3. it looks weird that the text is underlined on hover. But that's much easier to fix, so we'll focus on fixing problems 1 & 2 for now.

So, since we didn't specify anything about the caret yet the caret exists & reacts to interaction, that means shadcn/ui simply made an opinionated decision about the caret. But since we know that it's built on Radix-ui, we can go under-the-hood & modify shadcn/ui's `Accordion` with Radix-ui to behave more according to what we would like.

So, let's look at how shadcn/ui implements its accordion primitives:

```tsx
// src/components/ui/accordion.tsx
'use client';

import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';

import { cn } from '@/lib/utils';

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn('border-b', className)}
    {...props}
  />
));
AccordionItem.displayName = 'AccordionItem';

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className='flex'>
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        'flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180',
        className,
      )}
      {...props}
    >
      {children}
      <ChevronDownIcon className='text-muted-foreground h-4 w-4 shrink-0 transition-transform duration-200' />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className='data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm'
    {...props}
  >
    <div className={cn('pb-4 pt-0', className)}>{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
```

Ah, it looks like the `AccordionTrigger` component is what we should be zooming in on. Firstly, the `ChevronDownIcon` is listed after the `children`, which will put it to the right of the `children`. Let's swap that around.

Okay, that works. Now let's fix the spacing so that the trigger uses `justify-start` instead of `justify-between` to justify the children, because we don't want the children to be split on each end of the trigger.

Great! Now let's handle the orientation of the `ChevronDownIcon`. We can see that Tailwind is being used to rotate it based on the `[&[data-state=open]>svg]` selector to target svgs inside of the trigger (with the `ChevronDownIcon` being the only one). So, with that in mind, let's change the angle so that when the accordion is open, the `ChevronDownIcon` is pointing down. Which, coincidentally, is the same thing as just not rotating it because the icon is already pointing down, hence it being `ChevronDownIcon`. So what we're going to do to handle when the Accordion is closed, is to use the same selector but looking for `data-state=closed` instead. We'll set the angle of rotation in that case to be -90 degrees, which in Tailwind syntax translates to `-rotate-90`.

Okay, it's looking good! Let's just remove the `hover:underline` class now because that looks weird.

Great! & now let's fix the padding, the hover color & the text color. I don't know why the caret is set to be a different color from the text, but let's fix that to make all the colors uniform. I also notice that the text is muted by default but turns white on hover, so let's add that.

Great, now our "All Files" accordion trigger looks phenomenal. Here's what we got:

```tsx
const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className='flex'>
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        'text-muted-foreground flex flex-1 items-center justify-start gap-2 px-[16px] py-[6px] text-sm font-medium transition-all hover:bg-gray-800 hover:text-white [&[data-state=closed]>svg]:-rotate-90',
        className,
      )}
      {...props}
    >
      <ChevronDownIcon className='h-4 w-4 shrink-0 transition-transform duration-200' />
      {children}
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;
```

Okay, cool. Now we notice that every folder in the 'All Files' accordion is, itself, also an accordion. With slightly different styling. Hopefully that's not gonna be super annoying.

To start with, let's just mock some data. We'll create an array of strings & treat that as the filenames of various folders. & just to make this easier to nest, we'll create a new component for this - SidebarFolder.

Okay, looks like we'll have to fix some borders & bottom padding to nest these properly.

Alright, now it's looking pretty decent. We still need to indent each one, so we'll do that now. That is, unfortunately, one of the few issues with Tailwind. You can't use variable classnames. But we can wrap the children in a `div` & style that div with inline CSS.

...ah. So it looks like we have a problem. The padding is properly applied to the folder name, but not to the caret. We'll have to break up the `AccordionTrigger` primitive a bit more if we want to wrap the caret inside of the div as well. It's a little inconvenient, but it's not actually a real problem when it comes down to it because we were gonna have to do that anyway if we wanted to add various visual flares such as the caret changing color on hover separately from the trigger, or for that matter if we want to separate the caret itself as a trigger & make the rest of the `Accordion` header not be a trigger. So it was only a matter of time.

Okay, great, it all works if I split out the Chevron into a separate component. I didn't actually split up the Accordion `Trigger` & `Header` primitives, but I don't think I care about that yet. Now let's just throw some icons in there to match Dropbox.

That's actually hilarious. So it looks like because the icon is technically an SVG, now the folder icon rotates when the Accordian opens & closes. We can fix this by using some Tailwind `group-` selectors, fortunately, so let's do that.

Great, it's all looking good! Now, Dropbox doesn't do this, but I don't like that empty folders still get Chevron icons. So let's replace the Chevron with a dot for folders that don't have child folders. We'll use the BsDot icon.

Looks awesome! There is some weirdness in that closing a folder closes all child folders too, & that seems unintuitive to me. Offhand, let's just see if we can fix that by making `SidebarFolder` a controlled accordion.

Ah, okay, so it looks like it's an issue with the `AccordionContent` being unmounted on collapse & losing the internal state of whether or not it's open. Realistically I think the easiest way to solve this is by making them controlled accordions, & to do that in a scalable manner, that's going to require a provider. Which, technically, we may as well make since we actually don't have anything else to work on for this component. It will make it easier to mock data as well, since we can just mock it in the provider & then access it anywhere.
