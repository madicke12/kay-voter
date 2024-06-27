import { PrismaClient } from '@prisma/client';
import { NextResponse} from 'next/server'

export async function POST(req: Request) {
  const prisma = new PrismaClient();
  const body = await req.json();
  const { nom, prenom, matriculeParti,matriculeElection , photo, cni } = body;
  console.log(body);
  const electionId = await prisma.election.findUnique({
    where:{
      matricule: matriculeElection
    }
  });
  
  const partiId = await prisma.parti.findUnique({
      where:{
        matricule: matriculeParti
      }
    });

  const candidat = await prisma.candidat.create({
    data: {
      nom: nom  as string,
      prenom: prenom as string,
      electionId: electionId?.id as string,
      partiId : partiId?.id as string,
      photoUrl: photo as string,
      cni: cni as string,
    }
  });

  return NextResponse.json({
    candidat
  }, {
    status: 200
  });
}                                   