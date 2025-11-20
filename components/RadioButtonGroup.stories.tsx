import type { Meta, StoryObj } from '@storybook/react';
import RadioButtonGroup from './RadioButtonGroup';

const meta = {
  title: 'Components/RadioButtonGroup',
  component: RadioButtonGroup,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    options: {
      description: 'Array of options with value and label',
    },
    defaultValue: {
      control: 'text',
      description: 'Default selected value',
    },
  },
} satisfies Meta<typeof RadioButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const OSKernel: Story = {
  args: {
    defaultValue: 'one',
    options: [
      { value: 'one', label: 'Custom Linux Kernel Derivative: Start with a minimal Linux kernel (e.g., a stripped-down mainline LTS release), integrate essential device drivers, and build out a tailored init process.' },
      { value: 'two', label: 'AOSP Base: Leverage an AOSP-derived HAL and system services, using BSP integration and existing frameworks as a foundation for rapid device bring-up.' },
      { value: 'three', label: 'Microkernel Approach: Implement a microkernel (e.g., seL4) to strictly separate core services, relying on IPC mechanisms and user-space servers to manage drivers, file systems, and device I/O.' },
    ],
  },
};

export const Interface: Story = {
  args: {
    defaultValue: 'four',
    options: [
      { value: 'four', label: 'Native GUI Shell + EGL/Wayland: Use a lean, native toolkit with hardware-accelerated rendering (EGL), compositing via Wayland, and minimal shell protocols.' },
      { value: 'five', label: 'Adapted Android Framework: Employ the Android UI stack (SurfaceFlinger, View hierarchy), integrating Material Components as baseline UI elements, and build custom system apps via Jetpack.' },
      { value: 'six', label: 'Custom-Compositor + Custom Widgets: Implement a dedicated compositor (e.g., custom Weston derivative) and write your own widget toolkit in C++/Rust, managing input events and layouts directly.' },
    ],
  },
};

export const Security: Story = {
  args: {
    defaultValue: 'seven',
    options: [
      { value: 'seven', label: 'Signed Kernel/OS Updates + Verified Boot: Use a secure bootloader chain (e.g., U-Boot with verified boot), sign OTA payloads, and apply delta updates with rollback support.' },
      { value: 'eight', label: 'TEE Integration + SELinux Policies: Embed a Trusted Execution Environment (e.g., ARM TrustZone), enforce SELinux policies system-wide, and apply monthly patch-level updates from upstream code sources.' },
      { value: 'nine', label: 'Containerized Services + Granular Permissions: Run system services and third-party apps in containerized sandboxes (LXC, cgroups, seccomp), enforce capability-based permissions, and manage rolling updates at a container or microservice level.' },
    ],
  },
};

export const AccountType: Story = {
  args: {
    defaultValue: 'test_individual',
    options: [
      { value: 'test_individual', label: "I'm using this for personal use." },
      { value: 'test_developer', label: "I'm building or creating something for work." },
      { value: 'test_company', label: "We're using this as a team or organization." },
    ],
  },
};
