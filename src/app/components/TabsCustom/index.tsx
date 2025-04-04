"use client";

import React from "react";
import { Tabs, TabsProps } from 'antd';

interface TabProps {
    className?: string;
    data: TabsProps['items'];
}

const TabsCustom: React.FC<TabProps> = ({
    className,
    data,
}) => {

    return (
        <Tabs
            className={className}
            defaultActiveKey="1"
            items={data}
        >
        </Tabs>
    );
};

export default TabsCustom;