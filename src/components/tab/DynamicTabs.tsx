import React from 'react';
import { Tabs, Tab, TabProps, Badge, TabsProps } from '@mui/material';

interface DynamicTabProps extends TabProps {
  label: string;
  content: React.ReactNode;
  count?: number;
}

export interface DynamicTabsProps extends TabsProps {
  tabs: DynamicTabProps[];
  tabStyles?: React.CSSProperties;
  contentStyles?: React.CSSProperties;
  indicatorColor?: 'primary' | 'secondary';
  orientation?: 'horizontal' | 'vertical';
  variant?: 'standard' | 'scrollable' | 'fullWidth';
}

const DynamicTabs: React.FC<DynamicTabsProps> = ({
  tabs,
  tabStyles,
  contentStyles,
  indicatorColor = 'primary',
  orientation = 'horizontal',
  variant = 'standard',
  ...props
}) => {
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  return (
    <div>
      <Tabs
        value={selectedTab}
        onChange={handleChange}
        style={tabStyles}
        indicatorColor={indicatorColor}
        orientation={orientation}
        variant={variant}
        {...props}
      >
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            {...tab}
            label={
              tab.count !== undefined ? (
                <Badge badgeContent={tab.count} color="primary">
                  {tab.label}
                </Badge>
              ) : (
                tab.label
              )
            }
          />
        ))}
      </Tabs>
      <div style={contentStyles}>
        {tabs[selectedTab]?.content}
      </div>
    </div>
  );
};

export default DynamicTabs;