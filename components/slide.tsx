
import { Card, CardContent } from "@/components/ui/card"
import {
       Carousel,
       CarouselContent,
       CarouselItem,
       CarouselNext,
       CarouselPrevious,
} from "@/components/ui/carousel"
import CandidateDialog from "./candidateDialog"
import { getElectionCandidates , getAvalaibleElection } from "../server/action"

export async function CarouselSize() {
       const availableElection = await getAvalaibleElection() ;
       const candidates = await getElectionCandidates(availableElection.id) ;

       return (
              <Carousel
                     opts={{
                            align: "start",
                     }}
                     className="w-[1000px] max-w-sm"
              >
                     <CarouselContent>
                            {candidates.map(item=>  <CarouselItem key={item.id}  >
                                   <CandidateDialog nom={item.nom} prenom={item.prenom} photoUrl={item.photoUrl} electionId={item.electionId} candidatId={item.id} />
                            </CarouselItem>)}
                     </CarouselContent>
                     <CarouselPrevious />
                     <CarouselNext />
              </Carousel>
       )
}
