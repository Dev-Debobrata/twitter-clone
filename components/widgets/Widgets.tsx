import { SearchIcon } from "@heroicons/react/outline";
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import React from "react";

function Widgets() {
  return (
    <div className="col-span-2 mt-2 px-2 hidden lg:inline">
      <div className="flex items-center space-x-2 rounded-full bg-gray-100 p-3 mt-2">
        <SearchIcon className="h-5 w-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search Twitter"
          className="flex-1 outline-none bg-transparent"
        />
      </div>

      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="Dev_Destructor"
        options={{ height: 400 }}
      />
    </div>
  );
}

export default Widgets;
