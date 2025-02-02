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
		postThumbnailUrl: 'https://wsl/wordpress/posts/como-integrar-driver-sql-server/photo-1542831371-29b0f74f9713/',
		postTitle: 'Understanding how Links and protocols works 🚀',
		postContent: '\n<p>Que o Laravel é uma framework incrível todos já sabem, mas você sabia que é possível integrá-lo com um banco SQL Server? Neste post você irá aprender a baixar os drivers necessários, habilitá-los nas configurações do PHP e configurar o arquivo <code>.env</code> com sucesso.</p>\n\n\n\n<p>&lt;aside&gt; 💡 Com os drivers baixados e instalados, o uso dos mesmos não é restrito somente ao Laravel, é possível utilizá-los livremente utilizando a função <code>sqlsrv_connect()</code> ou uma conexão com a classe <code>\\\\PDO</code>.</p>\n\n\n\n<p>&lt;/aside&gt;</p>\n\n\n\n<h2 class=\"wp-block-heading\">Download dos drivers necessários</h2>\n\n\n\n<p>Antes de qualquer coisa, é necessário ter os drivers específicos para poder trabalhar com o SQL Server. Para isso, iremos acessar o <a href=\"https://learn.microsoft.com/en-us/sql/connect/php/download-drivers-php-sql-server?view=sql-server-ver16\">site da Microsoft</a> onde contém toda a documentação necessária para realizar a instalação.</p>\n\n\n\n<figure class=\"wp-block-image size-large\"><img loading=\"lazy\" decoding=\"async\" width=\"1024\" height=\"497\" src=\"http://wsl/wordpress/wp-content/uploads/2025/01/Untitled-1024x497.png\" alt=\"\" class=\"wp-image-12\" srcset=\"https://wsl/wordpress/wp-content/uploads/2025/01/Untitled-1024x497.png 1024w, https://wsl/wordpress/wp-content/uploads/2025/01/Untitled-300x146.png 300w, https://wsl/wordpress/wp-content/uploads/2025/01/Untitled-768x373.png 768w, https://wsl/wordpress/wp-content/uploads/2025/01/Untitled-1536x746.png 1536w, https://wsl/wordpress/wp-content/uploads/2025/01/Untitled.png 1920w\" sizes=\"auto, (max-width: 1024px) 100vw, 1024px\" /></figure>\n\n\n\n<figure class=\"wp-block-image size-full\"><img loading=\"lazy\" decoding=\"async\" width=\"694\" height=\"183\" src=\"http://wsl/wordpress/wp-content/uploads/2025/01/Untitled-1.png\" alt=\"\" class=\"wp-image-11\" srcset=\"https://wsl/wordpress/wp-content/uploads/2025/01/Untitled-1.png 694w, https://wsl/wordpress/wp-content/uploads/2025/01/Untitled-1-300x79.png 300w\" sizes=\"auto, (max-width: 694px) 100vw, 694px\" /></figure>\n\n\n\n<h2 class=\"wp-block-heading\">Instalação dos drivers</h2>\n\n\n\n<p>Após baixar todos os arquivos necessários, iremos instalar todas as extensões necessárias. Após descompactar todos os arquivos, iremos mover dois arquivos para a pasta de extensões do PHP <code>../php/ext</code>.</p>\n\n\n\n<ul class=\"wp-block-list\">\n<li>php_sqlsrv_83_nts_x64.dll</li>\n\n\n\n<li>php_pdo_sqlsrv_83_nts_x64.dll</li>\n</ul>\n\n\n\n<p>Com todos os arquivos devidamente no diretório correto, iremos abrir o arquivo <code>php.ini</code> e adicionaremos os drivers para que o PHP saiba que estão instalados:</p>\n\n\n\n<pre class=\"wp-block-code\"><code>extension=php_sqlsrv_83_nts_x64.dll\nextension=php_pdo_sqlsrv_83_nts_x64.dll\n</code></pre>\n\n\n\n<h2 class=\"wp-block-heading\">Configuração do arquivo <code>.env</code></h2>\n\n\n\n<p>Com tudo configurado, já é possível configurarmos o arquivo <code>.env</code> , veja o modelo abaixo e substitua pelas informações corretas de host, usuário e senha.</p>\n\n\n\n<pre class=\"wp-block-code\"><code>DB_CONNECTION=sqlsrv             # Nome do driver que será utilizado\nDB_HOST=\"localhost\"              # Ip de onde está o banco\nDB_PORT=null                     # Porta em que está o banco\nDB_DATABASE=forge                # Banco de dados a ser utilizado\nDB_USERNAME=sa                   # Usuário do banco\nDB_PASSWORD=senha                # Senha do banco\n</code></pre>\n\n\n\n<p>Agora que já temos tudo configurado, é só utilizar em seus projetos e ser feliz!</p>\n'
	},
};