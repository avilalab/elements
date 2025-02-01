import type { Meta, StoryObj } from '@storybook/react';
import { PostContent } from './PostContent';

const meta = {
	title: 'Blog/Post Content',
	component: PostContent,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {},
} satisfies Meta<typeof PostContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		postPublishDate: 'Jan 18, 2024',
		postThumbnailUrl: 'http://127.0.0.1:5500/thumbnail.jpg',
		postTitle: 'Understanding how Links and protocols works 🚀',
		postContent: "<p>Within a web browser, the ability to move from one document to another is facilitated by links. These links consist of two main parts: the protocol and server address, followed by the document path.</p>\n\n    <h2>Anatomy of a Link</h2>\n    <p>A link is essentially composed of two distinct segments. The first part determines the protocol and server address, which can be specified either through a domain name or an IP address. The second part represents the document path appended to the address. For instance, consider the following document address:</p>\n    <code>https://estudiopatagon.com/contact/</code>\n    <h3>Breaking it down:</h3>\n    <ul>\n        <li><b>Protocol (https):</b> Specifies the communication protocol to be used. In this case, it’s HyperText Transfer Protocol Secure, denoted by “https.”</li>\n        <li><b>Domain Name (estudiopatagon.com):</b> Identifies the server’s location using a human-readable domain name. It points to the server that hosts the website.</li>\n        <li><b>Document URL (/contact/):</b> Represents the specific path of the document relative to the server’s root path. It guides the server to the exact location of the requested content.</li>\n    </ul>\n\n    <h2>The Role of the Web Server</h2>\n    <p>Once a link is clicked, the web browser sends a request to the specified server using the provided protocol, domain name, and document path. The web server, in turn, is responsible for interpreting this request.</p>\n    <blockquote>\n        <p>Once identified, the server serves the file as the response, allowing the browser to render and display the content.</p>\n    </blockquote>\n    <p>The server analyzes the request, extracts the document path, and searches its directory structure for the corresponding file.</p>\n    <div class=\"post-image\">\n        <img class=\"elements-image-auto elements-image-rounded\" src=\"http://127.0.0.1:5500/code.jpg\" alt=\"\" />\n        <small><b>Photo by</b> <a href=\"#\">Ferenc Almasi</a> / <a href=\"#\">Unsplash</a></small>\n    </div>\n\n    <h2>Conclusion</h2>\n    <p>In essence, the web server acts as the interpreter and provider, ensuring that the correct response is delivered based on the user’s request. This seamless interaction between the browser and the server is fundamental to the functionality of the World Wide Web.</p>\n    <p>As we continue our exploration, we’ll delve deeper into the intricacies of web development, understanding how links, protocols, and servers collaborate to deliver the web content we interact with daily.</p>\n    <p>Stay tuned for a deeper dive into the mechanics of web navigation and document retrieval.</p>"
	},
};