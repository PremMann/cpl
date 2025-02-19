"use client"

import { ColumnDef } from "@tanstack/react-table"
import Link from "next/link"
import mainLeague from "@/../public/main.jpg"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faMapMarkerAlt, faTv } from "@fortawesome/free-solid-svg-icons"

export type Fixtres = {
  id: string
  amount: number
  teamvs: object
  email: string
  date: string
  stadium: string
  broadcast: string
  league: string
}

export const columns: ColumnDef<Fixtres>[] = [
  {
    accessorKey: "league",
    header: "League",
    cell: () => {
      return (
        <Link href="/">
          <Avatar>
            <AvatarImage src={mainLeague.src} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </Link>
      )
    },
  },
  {
    accessorKey: "teamvs",
    header: "Team A vs Team B",
    cell: ({ row }) => {
      const teamvs = row.getValue("teamvs") as { teamA: string, teamB: string, logoA: string, logoB: string, league: string }
      return (
        <div className="flex flex-row items-cente gap-4">
          <div className="flex flex-row items-center gap-4">
            <span>{teamvs.teamA}</span>
            <Link href="/">
              <Avatar>
                <AvatarImage src={teamvs.logoA} />
                <AvatarFallback>{teamvs.teamA}</AvatarFallback>
              </Avatar>
            </Link>
          </div>
          
          <span className="self-center"> vs </span>
          
          <div className="flex items-center">
            <Link href="/">
              <Avatar>
                <AvatarImage src={teamvs.logoB} />
                <AvatarFallback>{teamvs.teamB}</AvatarFallback>
              </Avatar>
            </Link>
            <span>{teamvs.teamB}</span>
          </div> 
        </div>
      )
    },
  },
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => {
      const date = row.getValue("date") as string 
      return (
        <div className="flex flex-row items-center gap-2">
          <FontAwesomeIcon icon={faCalendar} />
          <span>{date}</span>
        </div>
      )
    },
  },
 {
    accessorKey: "stadium",
    header: "Stadium",
    cell: ({ row }) => {
      const stadium = row.getValue("stadium") as string
      return <div className="flex flex-row items-center gap-2">
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          <span>{stadium}</span>
      </div>
    }
  },
  {
    accessorKey: "broadcast",
    header: "Broadcast",
    cell: ({ row }) => {
      const broadcast = row.getValue("broadcast") as string
      return <div className="flex flex-row items-center gap-2">
      <FontAwesomeIcon icon={faTv} />
      <span>{broadcast}</span>
    </div>
    }
  }
]
