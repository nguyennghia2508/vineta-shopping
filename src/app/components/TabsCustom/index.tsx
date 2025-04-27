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
        <div className='container px-[24px] w-full max-w-[1488px] mx-auto'>
            <Tabs
                className={className}
                defaultActiveKey="1"
                items={data}
            >
            </Tabs>
        </div>
    );
};

export default TabsCustom;