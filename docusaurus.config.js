/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

module.exports = {
  title: 'German grammar',
  tagline: 'Learning german while documenting it',
  url: 'https://germangram.netlify.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'sarunast', // Usually your GitHub org/user name.
  projectName: 'germangram', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'GermanGram',
      logo: {
        alt: 'GermanGram Logo',
        src: 'img/logo.svg',
      },
      links: [
        { to: 'docs/doc1', label: 'Docs', position: 'left' },
        { to: 'blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/sarunast/german-grammar',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Facebook, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [path.resolve(__dirname, './webpackConfigPlugin')],
}
