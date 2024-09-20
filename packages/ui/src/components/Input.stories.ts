import type {Meta, StoryObj} from "@storybook/react";
import Input from "./Input";

const meta = {
  title: 'Example/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;


export const UserId: Story = {
  args: {
    id: 'userId',
    label: '아이디',
    type: 'text',
    value: 'user@gamil.com',
    placeholder: '아이디로 사용할 이메일을 입력하세요.'
  },
};

export const Password: Story = {
  args: {
    id: 'password',
    label: '비밀번호',
    type: 'password',
    value: '1234',
    placeholder: '비밀번호를 입력하세요.'
  }
}

export const Error: Story = {
  args: {
    id: 'userid',
    label: '아이디',
    value: 'user@email.',
    placeholder: '아이디로 사용할 이메일을 입력하세요.',
    error: '아이디(이메일)는 이메일 형식으로 입력해주세요.'
  }
}
