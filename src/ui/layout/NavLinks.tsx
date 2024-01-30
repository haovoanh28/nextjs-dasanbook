"use client";

import { useState, useEffect, Fragment } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@mui/material";
import {
  Home,
  BarChart,
  List as ListIcon,
  ExpandLess,
  ExpandMore,
  Description,
  ManageHistory,
  Email,
  ManageAccounts,
} from "@mui/icons-material";
import { MANUSCRIPT_URL, SETTING_URL } from "@/const/url";

interface LinkType {
  text: string;
  href: string;
  icon?: React.ElementType;
  isExpand?: boolean;
  subLinks?: LinkType[];
}

export default function NavLinks() {
  const pathname = usePathname();
  const [expandMap, setExpandMap] = useState<{
    [key: number]: boolean;
  }>({});

  const LINKS: LinkType[] = [
    { text: "Home", href: "/", icon: Home },
    { text: "대시보드", href: "/dashboard", icon: BarChart },
    {
      text: "원고 투고 목록",
      href: MANUSCRIPT_URL,
      icon: ListIcon,
      isExpand: true,
      subLinks: [
        {
          text: "All Manuscripts",
          href: `${MANUSCRIPT_URL}/all`,
          icon: Description,
        },
        {
          text: "My Manuscripts",
          href: `${MANUSCRIPT_URL}/my`,
          icon: Description,
        },
      ],
    },
    {
      text: "원고 투고 목록",
      icon: ManageHistory,
      href: SETTING_URL,
      isExpand: true,
      subLinks: [
        {
          text: "메일 템플릿",
          href: `${SETTING_URL}/mail-template`,
          icon: Email,
        },
        {
          text: "분야별 담당자 지정",
          href: `${SETTING_URL}/user-assignment`,
          icon: ManageAccounts,
        },
      ],
    },
  ];

  useEffect(() => {
    LINKS.forEach(({ isExpand, href }, idx) => {
      // Init expandMap for expandable routes
      if (isExpand) {
        const isMatched = pathname.startsWith(href);
        setExpandMap((prev) => ({ ...prev, [idx]: isMatched ? true : false }));
      }
    });
  }, []);

  const createActiveStyle = (href: string) => {
    return {
      ...(pathname === href && {
        backgroundColor: "primary.main",
        color: "primary.contrastText",
        "& .MuiListItemIcon-root": {
          color: "primary.contrastText",
        },
      }),
    };
  };

  const renderExpandIcon = (isExpand: boolean | undefined, index: number) => {
    if (!isExpand) return null;
    return expandMap[index] ? <ExpandLess /> : <ExpandMore />;
  };

  return (
    <>
      {LINKS.map(({ text, href, icon: Icon, isExpand, subLinks }, idx) => (
        <Fragment key={href}>
          <ListItem
            disablePadding
            sx={{
              ...createActiveStyle(href),
            }}
          >
            <ListItemButton
              component={subLinks ? Box : Link}
              href={href}
              onClick={() => {
                setExpandMap({ ...expandMap, [idx]: !expandMap[idx] });
              }}
            >
              <ListItemIcon>{Icon && <Icon />}</ListItemIcon>
              <ListItemText primary={text} />
              {renderExpandIcon(isExpand, idx)}
            </ListItemButton>
          </ListItem>

          {subLinks && (
            <Collapse in={expandMap[idx]} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {subLinks.map(({ text, href, icon: Icon }) => (
                  <ListItem
                    key={text}
                    disablePadding
                    sx={{
                      ...createActiveStyle(href),
                    }}
                  >
                    <ListItemButton component={Link} href={href} sx={{ pl: 4 }}>
                      <ListItemIcon>{Icon && <Icon />}</ListItemIcon>
                      <ListItemText primary={text} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Collapse>
          )}
        </Fragment>
      ))}
    </>
  );
}
