import { Button, Form, FormProps, Input } from "antd";
import { ArrowRightIcon } from "lucide-react";
import React from "react";

interface NewsLetterProps {
    className?: string;
}

type FieldType = {
    email?: string;
};

const NewsletterFormCustom: React.FC<NewsLetterProps> = ({
    className
}) => {

    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        console.log('Success:', values);
    };

    const validateMessages = {
        required: 'Email is required!',
        types: {
            email: 'Email is not a valid!',
        },
    };

    return (
        <Form
            className={className}
            name="form-newsletter"
            method="post"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            validateMessages={validateMessages}
            autoComplete="off"
        >
            <div className="relative">
                <Form.Item<FieldType>
                    name="email"
                    className="mb-0 [&>.ant-row>.ant-col>.ant-form-item-additional]:absolute!
                    [&>.ant-row>.ant-col>.ant-form-item-additional]:pt-[5px]!
                    [&>.ant-row>.ant-col>.ant-form-item-additional]:pl-[21px]!
                    [&>.ant-form-item-margin-offset]:hidden
                    "
                    rules={[
                        { required: true },
                        { type: 'email' }
                    ]}
                >
                    <Input
                        placeholder="Email address"
                        className="
                            focus:shadow-none! 
                            focus:border-(--rgba-dark-2)! 
                            hover:border-(--rgba-dark-2)! 
                            h-[56px]! 
                            bg-transparent! 
                            text-[16px]! 
                            leading-[25.6px]! 
                            rounded-[49px]! 
                            border 
                            border-(--line)! 
                            py-[14px]! 
                            pr-[60px]! 
                            pl-[20px]! 
                            font-[400]!"
                    />
                </Form.Item>

                <div className="button-submit 
                    absolute 
                    right-[2px] 
                    top-1/2 
                    duration-300 
                    transition-all 
                    ease-in-out 
                    translate-y-[-50%] 
                    after:cursor-pointer 
                    after:content-[''] 
                    after:absolute 
                    after:w-full 
                    after:h-full 
                    after:left-[-100%] 
                    after:top-0 
                    hover:after:animate-shine-reverse 
                    after:opacity-60 
                    after:bg-[linear-gradient(120deg,rgba(0,0,0,0)_20%,rgba(255,255,255,0.4),rgba(0,0,0,0)_70%)]"
                >
                    <Button
                        htmlType="submit"
                        className="subscribe-button 
                            h-[51.6px]! 
                            w-[51.6px]! 
                            p-[16px]! 
                            rounded-[50%]! 
                            cursor-pointer! 
                            relative! 
                            overflow-hidden! 
                            bg-(--dark)!
                            transition-all
                            duration-300 
                            ease-in-out 
                            inline-flex 
                            border 
                            border-(--dark)! 
                            text-(--white)! 
                            justify-center 
                            items-center 
                            gap-[8px]! 
                            text-[17px]! 
                            leading-[24px]! 
                            font-[500]! 
                            capitalize"
                    >
                        <ArrowRightIcon />
                    </Button>
                </div>
            </div>
        </Form>
    );
};

export default NewsletterFormCustom;