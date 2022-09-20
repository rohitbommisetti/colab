import React from 'react';

const Team = (props) => {
  return (
    <div className='body'>
      <div className='wrap-team'>
        <div class="flex flex-col items-center w-full gap-y-4 md:w-1/2 lg:flex-row lg:items-end lg:w-auto lg:gap-x-3 lg:gap-y-0">
          <h3 class="text-7xl font-semibold">Rohit</h3>
          <div class="flex gap-y-4 text-center lg:text-left lg:gap-y-1 flex-col">
            <div class="flex gap-x-2 items-center">
              <div class="bg-[#111] bg-opacity-50 border border-[#a9a9a9] rounded-full px-4">
                Psychology
              </div>
              <div class="bg-[#111] bg-opacity-50 border border-[#a9a9a9] rounded-full px-4">
                Product Management
              </div>
            </div>
            <a class="text-[#5c75f5] hover:text-[#90bcfe] transition-colors " rel="noreferrer" target="_blank" href="https://twitter.com/rohitbommisetti">
              @rohitbommisetti
            </a>
          </div>
        </div>
        <div class="flex flex-col items-center w-full gap-y-4 md:w-1/2 lg:flex-row lg:items-end lg:w-auto lg:gap-x-3 lg:gap-y-0">
          <h3 class="text-7xl font-semibold">Jeff</h3>
          <div class="flex gap-y-4 text-center lg:text-left lg:gap-y-1 flex-col">
            <div class="flex gap-x-2 items-center">
              <div class="bg-[#111] bg-opacity-50 border border-[#a9a9a9] rounded-full px-4">
                Engineering
              </div>
              <div class="bg-[#111] bg-opacity-50 border border-[#a9a9a9] rounded-full px-4">
                Design
              </div>
            </div>
            <a class="text-[#5c75f5] hover:text-[#90bcfe] transition-colors " rel="noreferrer" target="_blank" href="https://twitter.com/1eonata">
              @1eonata
            </a>
          </div>
        </div>
        <div class="flex flex-col items-center w-full gap-y-4 md:w-1/2 lg:flex-row lg:items-end lg:w-auto lg:gap-x-3 lg:gap-y-0">
          <h3 class="text-7xl font-semibold">You</h3>
          <div class="flex gap-y-4 text-center lg:text-left lg:gap-y-1 flex-col">
            <div class="flex gap-x-2 items-center">
              <div class="bg-[#111] bg-opacity-50 border border-[#a9a9a9] rounded-full px-4">
                Your
              </div>
              <div class="bg-[#111] bg-opacity-50 border border-[#a9a9a9] rounded-full px-4">
                Choice
              </div>
            </div>
            <a class="text-[#5c75f5] hover:text-[#90bcfe] transition-colors " rel="noreferrer" target="_blank" href="https://www.instagram.com/pittcolab/">
              @pittcolab
            </a>
          </div>
        </div>
      </div>
    </div>

  )
};

export default Team;