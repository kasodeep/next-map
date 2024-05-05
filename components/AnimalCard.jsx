import * as React from 'react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function AnimalCard({ data }) {
  return (
    <Card className="w-auto shadow-md shadow-gray-800 m-4">
      <CardHeader>
        <CardTitle>{data.title.toUpperCase()}</CardTitle>
      </CardHeader>
      <CardContent>{data.content}</CardContent>
    </Card>
  )
}
