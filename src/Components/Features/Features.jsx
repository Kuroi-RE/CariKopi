import React from "react";

export default function Feature({ title, description, icons }) {
  return (
    <>
      {/*          <!-- Component: Feature item with icon and text --> */}
      <div className="flex items-start gap-4">
        <div className="bg-gray-700 p-3 rounded-md">
          <div className="flex items-center text-amber-500">{icons}</div>
        </div>

        <div className="flex w-full min-w-0 flex-col items-start justify-center gap-0 text-base">
          <p className="text-slate-500">
            <strong className="font-medium text-slate-700">
              {title || "Title"}:
            </strong>{" "}
            {description || "Description"}
          </p>
        </div>
      </div>
      {/*          <!-- End Feature item with icon and text --> */}
    </>
  );
}
