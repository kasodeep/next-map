import * as React from 'react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function AnimalCard({ data }) {
  return (
    <Card className="w-auto">
      <CardHeader>
        <CardTitle>{data.title}</CardTitle>
      </CardHeader>
      <CardContent>{data.content}</CardContent>
    </Card>
  )
}
