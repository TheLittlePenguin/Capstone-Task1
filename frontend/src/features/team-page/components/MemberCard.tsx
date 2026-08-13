type Member = {
  name: string
  role: string
  blurb: string
  imageURL: string
}

export function MemberCard({ member }: { member: Member }) {
  return (
    <div className="flex p-4 m-1.5">
      <div className="rounded-full flex size-32 shrink-0 items-center justify-center m-3">
        {member.imageURL ? (
          <img className="size-full rounded-full object-cover " src={member.imageURL} alt={member.name} />
        ) : (
          <span>Image</span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-2">
        <div className="flex gap-4">
          <div className="bg-background-text-gray p-2">{member.name}</div>
          <div className="bg-background-text-gray p-2">{member.role}</div>
        </div>
        <div className="p-2 ">
        <p >{member.blurb}</p>
      </div>
      </div>
    </div>
  )
}
