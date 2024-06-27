import { Prisma, PrismaClient } from '@prisma/client';



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
export const getAvalaibleElection = async ()=>{
    const prisma = new PrismaClient();
    return await prisma.election.findFirst({
        where :{availabe:true}
    })
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

export const getParties = async()=>{
    const prisma = new PrismaClient();
    const p = await prisma.parti.findMany();
    return p ;
}