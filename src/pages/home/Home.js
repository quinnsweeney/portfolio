import { Button } from "@headlessui/react";
import Project from "../../components/Nav/Project/Project";
import Pdf from "../../resources/SweeneyQuinnResume.pdf";

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
          <a href={Pdf} target="_blank" rel="noreferrer">
            <Button class="mt-4 rounded bg-indigo-500 py-2 px-4 text-sm text-white data-[hover]:bg-indigo-400 data-[active]:bg-sky-600">
              Download Resume
            </Button>
          </a>
        </div>
        <div class="grid grid-cols-1 mt-16 text-center sm:mt-20 gap-x-20 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          <Project
            title="Ski Area Pathfinding"
            status={false}
            desc="A full stack web application that helps users navigate ski resorts"
          />
          <Project
            title="Portfolio Website"
            status={true}
            statusText="Completed 2024"
            href="https://github.com/quinnsweeney/portfolio"
            desc="This website is my most recent completed project, built using
              React with Tailwind & HeadlessUI"
          />
          <Project
            title="Read-Only Reddit Client"
            status={true}
            statusText="Completed 2021"
            href="https://quinnsweeney11.github.io/reddit-client/"
            desc="A Reddit client built with React & Redux."
          />
          <Project
            title="Ecommerce API"
            status={true}
            statusText="Completed 2021"
            href="https://github.com/quinnsweeney11/ecommerce-api/tree/master"
            desc="API for an ecommerce website built with Express JS. The plan at
              the time was to build out a front end as well, which never
              happened."
          />
          <Project
            title="Jamming"
            status={false}
            statusText="Lost Access to Code :("
            desc="A web application that let users sign in to their Spotify account & create playlists that would actually be saved to their profile. Unfortunately I lost access to my old Github account, and the Repo was private."
          />
        </div>
      </div>
    </div>
  );
}
