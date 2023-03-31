import React from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { Layout } from './components'
import './index.css'
import { router } from './router'

const root = createRoot(document.getElementById('root') as HTMLElement)
root.render(
	<React.StrictMode>
		<Layout>
			<RouterProvider router={router} />
		</Layout>
	</React.StrictMode>
)
