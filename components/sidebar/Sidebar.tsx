import React from "react";
import {
  BellIcon,
  HashtagIcon,
  BookmarkIcon,
  CollectionIcon,
  MailIcon,
  UserIcon,
  HomeIcon,
  DotsCircleHorizontalIcon,
} from "@heroicons/react/outline";
import SidebarRow from "./SidebarRow";
import Home from "../../pages";
import { signOut, signIn, useSession } from "next-auth/react";

function Sidebar() {
  const { data: session } = useSession();

  return (
    <div className="col-span-2 flex flex-col items-center px-4 md:items-start">
      <img
        className="h-10 w-10 m-3"
        src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Twitter-logo.svg"
        alt="Twitter Logo"
      />
      <SidebarRow Icon={HomeIcon} title="Home" />
      <SidebarRow Icon={HashtagIcon} title="Explore" />
      <SidebarRow Icon={BellIcon} title="Notifications" />
      <SidebarRow Icon={MailIcon} title="Messages" />
      <SidebarRow Icon={BookmarkIcon} title="Bookmarks" />
      <SidebarRow Icon={CollectionIcon} title="Lists" />
      <SidebarRow
        onClick={session ? signOut : signIn}
        Icon={UserIcon}
        title={session ? "Sign Out" : "Sign In"}
      />
      <SidebarRow Icon={DotsCircleHorizontalIcon} title="More" />
    </div>
  );
}

export default Sidebar;
