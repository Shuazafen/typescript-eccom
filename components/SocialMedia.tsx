import React from 'react'
import { Tooltip, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import Link from 'next/link';
import { Facebook } from 'lucide-react';
import { Twitter } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Github } from 'lucide-react';
import { TooltipContent } from '@radix-ui/react-tooltip';
import { cn } from '@/lib/utils';

interface Props {
    className?: string;
    iconClassName?: string;
    tooltip?: string;
}

const socialLink = [
    {
        href: 'https://facebook.com',
        icon: Facebook,
        label: 'Facebook'
    },
    {
        href: 'https://twitter.com',
        icon: Twitter,
        label: 'Twitter'
    },
    {
        href: 'https://instagram.com',
        icon: Instagram,
        label: 'Instagram'
    },
    {
        href: 'https://linkedin.com',
        icon: Linkedin,
        label: 'Linkedin'
    },
    {
        href: 'https://github.com',
        icon: Github,
        label: 'Github'
    }
]
const SocialMedia = ({className, iconClassName, tooltip}: Props) => {
  return (
   <TooltipProvider>
    <div className={cn('flex items-center gap-3.5', className)}>
      {socialLink.map((item) => (
          <Tooltip key={item?.label}>
          <TooltipTrigger asChild>
               <Link href={item?.href}
               target="_blank" 
               rel='noopener noreferrer'
               className={cn('p-2 border rounded-full hover:text-white hover:border-white hoverEffect', iconClassName)}>
               <item.icon />
               </Link>
              
          </TooltipTrigger>
          <TooltipContent className={cn('bg-white text-darkColor font-semibold', tooltip)}>Facebook</TooltipContent>
      </Tooltip>
      ))}
    </div>
   </TooltipProvider>
  )
}

export default SocialMedia