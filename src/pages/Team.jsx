import React from "react";

export default function Team() {
  return (
    <div class="max-w-3xl mx-auto pb-28 pt-10">
      <h1 class="text-white text-6xl font-semibold text-center">Our Team.</h1>
      <div class="flex lg:justify-center flex-wrap lg:gap-x-8 gap-y-12 lg:gap-y-20 py-20 text-white">
      <div class="flex flex-col items-center w-full gap-y-4 md:w-1/2 lg:flex-row lg:items-end lg:w-auto lg:gap-x-3 lg:gap-y-0">
        <h3 class="text-7xl font-normal">Rohit</h3>
        <div class="flex gap-y-4 text-center lg:text-left lg:gap-y-1 flex-col">
          <div class="flex gap-x-2 items-center">
            <div class="bg-inherit border rounded-full px-4">
              Product Management
            </div>
          </div>
          <a
            class="text-[#5c75f5] hover:text-[#90bcfe] transition-colors "
            rel="noreferrer"
            target="_blank"
            href="https://twitter.com/rohitbommisetti"
          >
            @rohitbommisetti
          </a>
        </div>
      </div>
      <div class="flex flex-col items-center w-full gap-y-4 md:w-1/2 lg:flex-row lg:items-end lg:w-auto lg:gap-x-3 lg:gap-y-0">
        <h3 class="text-7xl font-normal">Jeff</h3>
        <div class="flex gap-y-4 text-center lg:text-left lg:gap-y-1 flex-col">
          <div class="flex gap-x-2 items-center">
            <div class="bg-inherit border rounded-full px-4">Engineering</div>
            <div class="bg-inherit border rounded-full px-4">Design</div>
          </div>
          <a
            class="text-[#5c75f5] hover:text-[#90bcfe] transition-colors "
            rel="noreferrer"
            target="_blank"
            href="https://twitter.com/1eonata"
          >
            @1eonata
          </a>
        </div>
      </div>
      <div class="flex flex-col items-center w-full gap-y-4 md:w-1/2 lg:flex-row lg:items-end lg:w-auto lg:gap-x-3 lg:gap-y-0">
        <h3 class="text-7xl font-normal">Flora</h3>
        <div class="flex gap-y-4 text-center lg:text-left lg:gap-y-1 flex-col">
          <div class="flex gap-x-2 items-center">
            <div class="bg-inherit border rounded-full px-4">Marketing</div>
          </div>
          <a
            class="text-[#5c75f5] hover:text-[#90bcfe] transition-colors "
            rel="noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/flora-stein-b45372208/"
          >
            @flora
          </a>
        </div>
      </div>
    </div>
    </div>
    
  );
}
