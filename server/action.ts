import { PrismaClient } from '@prisma/client';


export const createElection =async (formdata:FormData) => {
    const prisma = new PrismaClient();
    const titre = formdata.get('titre') as string; ;
    const description = formdata.get('description') as string ;
    const dateDebut = formdata.get('dateDebut') as string;
    const dateFin = formdata.get('dateFin')
    const type = formdata.get('type');

    const Election = await prisma.election.create({
        data:{
            titre,
            description,
            dateDebut,
            dateFin,
            type
        }
    }) 
}

export const getElections = async () => {
    const prisma = new PrismaClient();
    const elections = await prisma.election.findMany();
    return elections;
}

export const getElectionbyId = async (id:string) => {
    const prisma = new PrismaClient();
    const election = await prisma.election.findUnique({
        where:{
            id
        }
    });
    return election;
}

export const getElectionCandidates = async (id:string) => {
    const prisma = new PrismaClient();
    const candidates = await prisma.candidat.findMany({
        where:{
            electionId:id
        }
    });
    return candidates;
}

export const createCandidate = async (formdata:FormData) => {
    const prisma = new PrismaClient();
    const nom = formdata.get('nom') as string;
    const prenom = formdata.get('prenom') as string;
    const electionId = formdata.get('electionId') as string;
    const photo = formdata.get('photo') as string;
    const candidat = await prisma.candidat.create({
        data:{
            nom,
            prenom,
            electionId,
            photoUrl:photo,
            cni:formdata.get('cni') as string,

        }
    });
    return candidat;
}


export const createVote = async (formdata:FormData) => {
    const prisma = new PrismaClient();
    const candidatId = formdata.get('candidatId') as string;
    const electeurId = formdata.get('userId') as string;
    const vote = await prisma.vote.create({
        data:{
            candidatId,
            electeurId,
            electionId:formdata.get('electionId') as string
        }
    });
    return vote;
}

