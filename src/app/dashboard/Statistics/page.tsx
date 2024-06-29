import StatsComponent from "../../../../components/diarra"
import { getAvalaibleElection, getElectionCandidates, getTotalInscris, getVotes } from "../../../../server/action"

const Page = async ()=>{
    const election = await getAvalaibleElection()
    const candidat = await getElectionCandidates(election?.id)
    const vote = await getVotes(election?.id)
    const totalInscris = await getTotalInscris()
    console.log(totalInscris)
    return (
        <div className="p-3">
            <StatsComponent totalInscris={totalInscris} candidat={candidat} vote={vote}  />
        </div>
    )
}

export default Page