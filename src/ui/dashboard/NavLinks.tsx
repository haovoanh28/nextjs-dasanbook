"use client";

import { useState, useEffect, Fragment } from "react";
import { usePathname } from "next/navigation";

import Link from "next/link";
import {
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
} from "@mui/icons-material";

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
      href: "/submission",
      icon: ListIcon,
      isExpand: true,
      subLinks: [
        {
          text: "All Manuscripts",
          href: "/submission/all",
          icon: Description,
        },
        {
          text: "My Manuscripts",
          href: "/submission/my",
          icon: Description,
        },
      ],
    },
  ];

  useEffect(() => {
    LINKS.forEach(({ isExpand }, idx) => {
      // Init expandMap for expandable routes
      if (isExpand) {
        setExpandMap((prev) => ({ ...prev, [idx]: false }));
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
    return expandMap[index] ? (
      <ExpandLess
        onClick={() => {
          setExpandMap({ ...expandMap, [index]: false });
        }}
      />
    ) : (
      <ExpandMore
        onClick={() => {
          setExpandMap({ ...expandMap, [index]: true });
        }}
      />
    );
  };

  return (
    <>
      {LINKS.map(({ text, href, icon: Icon, isExpand, subLinks }, idx) => (
        <Fragment key={text}>
          <ListItem
            disablePadding
            sx={{
              ...createActiveStyle(href),
            }}
          >
            <ListItemButton component={Link} href={href}>
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
