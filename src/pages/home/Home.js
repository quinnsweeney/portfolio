import { Button } from "@headlessui/react";

export default function Home(props) {
  return (
    <div class="bg-white dark:bg-gray-900 antialiased">
      <div class="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
        <div class="max-w-2xl mx-auto text-center">
          <h2 class="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Quinn Sweeney
          </h2>
          <p class="mt-4 text-base font-normal text-gray-500 sm:text-xl dark:text-gray-400">
            Studying MIS & Computer Science at the University of Alabama
          </p>
          <a href="/" target="_blank">
            <Button class="mt-4 rounded bg-indigo-500 py-2 px-4 text-sm text-white data-[hover]:bg-indigo-400 data-[active]:bg-sky-600">
              Download Resume
            </Button>
          </a>
        </div>
        <div class="grid grid-cols-1 mt-12 text-center sm:mt-16 gap-x-20 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          <div class="space-y-4">
            <h3 class="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
              Ski Area Pathfinding
            </h3>
            <span class="bg-green-700 text-white text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded">
              In progress
            </span>
            <p class="text-lg font-normal text-gray-500 dark:text-gray-400">
              A full stack web application that helps users navigate ski resorts
            </p>
            <div>
              <a href="https://www.google.com" target="_blank" className="py-2">
                <Button
                  href="https://www.google.com"
                  className="rounded bg-sky-600 py-2 px-4 text-sm text-white data-[hover]:bg-sky-500 data-[active]:bg-sky-700"
                >
                  View Repository
                </Button>
              </a>
            </div>
          </div>
          <div class="space-y-4">
            <h3 class="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
              Official website
            </h3>
            <p class="text-lg font-normal text-gray-500 dark:text-gray-400">
              Flowbite helps you connect with friends, family and communities of
              people who share your interests.
            </p>
            <Button className="rounded bg-sky-600 py-2 px-4 text-sm text-white data-[hover]:bg-sky-500 data-[active]:bg-sky-700">
              View Repository
            </Button>
          </div>
          <div class="space-y-4">
            <h3 class="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
              Official website
            </h3>
            <p class="text-lg font-normal text-gray-500 dark:text-gray-400">
              Flowbite helps you connect with friends, family and communities of
              people who share your interests.
            </p>
            <Button className="rounded bg-sky-600 py-2 px-4 text-sm text-white data-[hover]:bg-sky-500 data-[active]:bg-sky-700">
              View Repository
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
