// @flow
// ====================== LIBS
import React from 'react'
import { Link } from 'react-router-dom'
// ====================== TYPES
import type Node from 'react'

export function AdminContainer({ children }: { children: Node }) {
  return (
    <div>
      <ul>
        <li>
          <Link to="/admin/">Admin</Link>
        </li>
        <li>
          <Link to="/admin/items">Items</Link>
        </li>
        <li>
          <Link to="/admin/categories">Categories</Link>
        </li>
      </ul>
      <div>{children}</div>
    </div>
  )
}
