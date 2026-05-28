import { NextResponse } from 'next/server'
import { trafficLaws } from '@/lib/mockData'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const state = searchParams.get('state')
    const violationType = searchParams.get('violationType')

    let filteredLaws = [...trafficLaws]

    if (state) {
      filteredLaws = filteredLaws.filter((law) => law.state === state)
    }

    if (violationType) {
      filteredLaws = filteredLaws.filter((law) => law.violationType === violationType)
    }

    return NextResponse.json({
      success: true,
      data: filteredLaws,
      count: filteredLaws.length,
      timestamp: new Date().toISOString(),
    })
  } catch (_error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch traffic laws' },
      { status: 500 }
    )
  }
}
