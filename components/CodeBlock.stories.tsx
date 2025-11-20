import type { Meta, StoryObj } from '@storybook/react';
import CodeBlock from './CodeBlock';

const meta = {
  title: 'Components/CodeBlock',
  component: CodeBlock,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CodeBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: `#include <iostream>
#include <string>
#include <thread>
#include <asio.hpp>

using asio::ip::tcp;

void handle_client(tcp::socket socket) {
    try {
        std::string message =
            "HTTP/1.1 200 OK\\r\\n"
            "Content-Type: text/plain\\r\\n"
            "Connection: close\\r\\n"
            "\\r\\n"
            "Hello, World!";
        asio::write(socket, asio::buffer(message));
    } catch (...) {}
}

int main() {
    asio::io_context context;

    tcp::acceptor acceptor(context,
        tcp::endpoint(tcp::v4(), 8080));

    std::cout << "Server running on port 8080...\\n";

    while (true) {
        tcp::socket socket(context);
        acceptor.accept(socket);
        std::thread(handle_client, std::move(socket)).detach();
    }

    return 0;
}`,
  },
};
