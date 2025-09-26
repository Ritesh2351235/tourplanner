import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { z } from 'zod'

const waitlistSchema = z.object({
  email: z.string().email('Invalid email address'),
})

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    
    const { email } = waitlistSchema.parse(body)
    
    // Check if email already exists
    const existingEmail = await prisma.waitlist.findUnique({
      where: { email }
    })
    
    if (existingEmail) {
      return NextResponse.json(
        { error: 'Email already exists in waitlist' },
        { status: 409 }
      )
    }
    
    // Add email to waitlist
    const waitlistEntry = await prisma.waitlist.create({
      data: { email }
    })
    
    return NextResponse.json(
      { message: 'Successfully added to waitlist', id: waitlistEntry.id },
      { status: 201 }
    )
    
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }
    
    console.error('Waitlist signup error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}