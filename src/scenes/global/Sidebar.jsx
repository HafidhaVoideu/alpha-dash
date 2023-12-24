"use client";

import React, { useState, useEffect } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import styled from "styled-components";
import logo from "../../assets/logo.png";
import Image from "next/image";
import COLORS from "../../styles/COLORS";
import { StyledIconButton } from "@/styles/globalStyledCompoents";

import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
// ***********************  icons *******************************

import dashboard from "../../assets/dashboard.svg";
import session from "../../assets/session.svg";
import admin from "../../assets/admin.svg";
import user from "../../assets/user.svg";
import logout from "../../assets/logout.svg";
import profile from "../../assets/profile.png";
import Link from "next/link";
const dashboardList = {
  listName: "dashboard",
  icon: dashboard,
  listItems: ["overview", "statistics", "notifications"],
  links: [
    "/dashboard/overview",
    "/dashboard/statistics",
    "/dashboard/notifications",
  ],
};

const sessionList = {
  listName: "session",
  icon: session,
  listItems: ["create session", " history", "manage sessions"],
  links: ["/session/create", "/session/history", "/session/manage"],
};

const usersList = {
  listName: "user",
  icon: user,
  listItems: ["overview", "manage users"],
  links: ["/user/manage", "/user/overview"],
};

const adminList = {
  listName: "admin",
  icon: admin,
  listItems: ["Manage Dashboard", "Manage Sessions", "Admin Access"],
  links: [
    "/admin/admin-access",
    "/admin/manage-dashboard",
    "/admin/manage-sessions",
  ],
};

const sidebarLists = [dashboardList, sessionList, usersList, adminList];

// Menu Item

const MenuItem = ({ list, activeTab, handleActiveTab }) => {
  const router = useRouter();
  const [isActiveTab, setIsActiveTab] = useState(false);

  const pathname = usePathname();
  const { listItems, listName, icon, links } = list;

  // console.log("active List:", activeList);
  useEffect(() => {
    if (activeTab !== links[0]) setIsActiveTab(false);
  }, [activeTab]);

  return (
    <StyledMenu>
      <StyledMenuHeader
        isselected={activeTab === links[0]}
        onClick={() => {
          // router.push(links[0]);

          handleActiveTab(links[0]);
          setIsActiveTab(!isActiveTab);
        }}
      >
        <Image
          src={icon}
          height={24}
          width={24}
          alt={listName}
          priority={true}
        />

        <span>{listName}</span>
      </StyledMenuHeader>

      <StyledList
        isvisible={activeTab === links[0] && isActiveTab ? "show" : "hide"}
      >
        {listItems.map((item, index) => (
          <StyledListItem
            key={index}
            onClick={() => {
              // setActiveList(listName);
            }}
          >
            <Link
              href={links[index]}
              style={{
                color: pathname === links[index] ? "white" : COLORS.underline,
              }}
            >
              {item}
            </Link>
          </StyledListItem>
        ))}
      </StyledList>
    </StyledMenu>
  );
};

// SideBar

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState("/dashboard/overview");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  // const [set]

  const handleActiveTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <StyledAside sidebar={isSidebarOpen ? "open" : "closed"}>
      {/* Header */}
      <StyledAsideHeader>
        <Image
          src={logo}
          height={28.588}
          width={115.147}
          alt="logo"
          priority={true}
          onClick={() => setIsSidebarOpen(true)}
        />

        {isSidebarOpen && (
          <StyledAsideButton onClick={() => setIsSidebarOpen(false)}>
            <IoIosArrowRoundBack />
          </StyledAsideButton>
        )}
      </StyledAsideHeader>

      {/* Nav  */}

      <StyledNav>
        {!isSidebarOpen ? (
          <StyledList>
            {sidebarLists.map((list, index) => (
              <StyledListItem
                key={index}
                sidebar={isSidebarOpen ? "open" : "closed"}
              >
                <Image
                  src={list.icon}
                  height={24}
                  width={24}
                  alt={list.listName}
                />
              </StyledListItem>
            ))}
          </StyledList>
        ) : (
          sidebarLists.map((list, index) => (
            <MenuItem
              key={index}
              list={list}
              activeTab={activeTab}
              handleActiveTab={handleActiveTab}
            />
          ))
        )}
      </StyledNav>

      {/* Footer */}

      <StyledAsideFooter>
        <StyledFooterDiv sidebar={isSidebarOpen ? "open" : "closed"}>
          <Image
            src={logout}
            height={28}
            width={28}
            alt="logout"
            priority={true}
            onClick={() => setIsSidebarOpen(true)}
          />
          <span>Logout</span>
        </StyledFooterDiv>

        <StyledFooterDiv sidebar={isSidebarOpen ? "open" : "closed"}>
          <Image
            src={profile}
            height={28}
            width={28}
            alt="profile"
            priority={true}
            onClick={() => setIsSidebarOpen(true)}
          />
          <span>profile</span>
        </StyledFooterDiv>
      </StyledAsideFooter>
    </StyledAside>
  );
};

export default Sidebar;

const StyledAside = styled.aside`
  background-color: ${COLORS.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem;

  flex: ${(props) => (props.sidebar === "open" ? "0.17" : "0.02")};

  & > header > img {
    margin-left: ${(props) => (props.sidebar === "open" ? "auto" : "0")};
  }

  transition: all 0.2s ease-out;
`;

const StyledAsideButton = styled(StyledIconButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  color: white;
  font-size: 2.8rem;
  margin-left: auto;

  &:hover {
    color: ${COLORS.lighterGrey};
  }
`;

const StyledAsideHeader = styled.header`
  display: flex;
  align-items: center;

  justify-content: center;
  align-self: stretch;

  img {
    cursor: pointer;
  }
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 1.8rem;
  gap: 2.5rem; /* height: auto; */
  overflow: hidden;
  height: ${(props) => (props.isvisible === "show" ? "180px" : 0)};
  transition: all 0.2s ease-out;

  flex: 1;
`;

const StyledListItem = styled.li`
  margin: 0 3.5rem;
  text-transform: capitalize;

  a:hover {
    color: white;
    transition: all 0.2s ease-in-out;
  }
`;

const StyledAsideFooter = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-self: center;
  margin-top: auto;
`;

const StyledFooterDiv = styled.div`
  color: white;
  display: flex;
  flex-direction: ${(props) => (props.sidebar === "open" ? "row" : "column")};
  align-items: center;
  gap: 2rem;

  span {
    display: ${(props) => (props.sidebar === "open" ? "block" : "none")};
  }
`;

const StyledMenu = styled.div``;

const StyledMenuHeader = styled.header`
  border-radius: 6px;
  font-weight: 500;
  text-transform: capitalize;
  font-size: 16px;
  padding: 1rem;
  display: flex;
  gap: 1rem;
  align-items: center;
  cursor: pointer;

  color: ${(props) => (props.isselected ? props.isselected : "white")};
  background-color: ${(props) =>
    props.isselected ? "white" : COLORS.tertiary};
  img {
    filter: ${(props) =>
      props.isselected
        ? "invert(7%) sepia(9%) saturate(5590%) hue-rotate(177deg) brightness(35%) contrast(93%)"
        : ""};
  }

  &:hover {
    background-color: white;

    color: ${COLORS.primary};
    img {
      filter: invert(7%) sepia(9%) saturate(5590%) hue-rotate(177deg)
        brightness(35%) contrast(93%);
    }
  }
`;

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  margin-top: 4rem;
  flex: 1;
`;
