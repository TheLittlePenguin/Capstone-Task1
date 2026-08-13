import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { getServerSession } from '@/actions/auth.actions'
import { PageHeader } from '@/components/layout/PageHeader'
import { MemberCard } from '@/features/team-page/components/MemberCard'
import { teamMembers } from '@/features/team-page/team.actions'

export default async function TeamPage() {
  const session = await getServerSession()

  return (
    <div>
      <h1 className='text-center m-3 text-xl'><strong>Team 39 - Intern and Management System</strong></h1>
      <div className="flex flex-col gap-6">
        {teamMembers.map((member) => (
          <MemberCard key={member.name} member={member} />
        ))}
      </div>
    </div>
  )
}
