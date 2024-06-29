import { Prisma, PrismaClient } from '@prisma/client';
import { id } from 'date-fns/locale';



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
    const data = await prisma.election.findUnique({
        where :{open:true}
    })
    return  data
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

export const getVotes = async (id:string)=>{
    const prisma = new PrismaClient()
    const vote = await prisma.vote.findMany({
        where:{electionId : id}
    })
    return vote.length
}

export const getTotalInscris = async ()=>{
    const prisma = new PrismaClient()
    const inscris = await prisma.electeur.findMany()
    return inscris.length 
}

export const countVote = async (id:string)=>{
    const prisma = new PrismaClient()
    const vote = await prisma.vote.findMany({
        where:{candidatId:id}
    })
    return vote.length
}