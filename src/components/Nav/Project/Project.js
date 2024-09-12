import { Button } from "@headlessui/react";

function GetStatus(s, statusText = "In Progress") {
  //S true = project is done, S false = project is not done (Color of element depends on status)
  if (s) {
    return (
      <span class="bg-green-700 text-white text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded">
        {statusText}
      </span>
    );
  } else {
    return (
      <span class="bg-red-700 text-white text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded">
        {statusText}
      </span>
    );
  }
}

export default function Project(props) {
  return (
    <div class="space-y-4">
      <h3 class="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
        {props.title}
      </h3>
      {GetStatus(props.status, props.statusText)}
      {/* <span class="bg-red-700 text-white text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded">
        In progress
      </span> */}
      <p class="text-lg font-normal text-gray-500 dark:text-gray-400">
        {/* A full stack web application that helps users navigate ski resorts */}
        {props.desc}
      </p>
      {props.status === true ? (
        <div>
          <a href={props.href} target="_blank" className="py-2">
            <Button
              href="/"
              className="rounded bg-sky-600 py-2 px-4 text-sm text-white data-[hover]:bg-sky-500 data-[active]:bg-sky-700"
            >
              View
            </Button>
          </a>
        </div>
      ) : undefined}
    </div>
  );
}
