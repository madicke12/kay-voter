
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import CandidateDialog from "./candidateDialog"

export function CarouselSize() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-[1000px] max-w-sm"
    >
      <CarouselContent>
       
          <CarouselItem  >
                 <CandidateDialog/>
          </CarouselItem>
          <CarouselItem  >
                 <CandidateDialog/>
          </CarouselItem>

          <CarouselItem  >
                 <CandidateDialog/>
          </CarouselItem>
          <CarouselItem  >
                 <CandidateDialog/>
          </CarouselItem>
          <CarouselItem  >
                 <CandidateDialog/>
          </CarouselItem>
          <CarouselItem  >
                 <CandidateDialog/>
          </CarouselItem>
          <CarouselItem  >
                 <CandidateDialog/>
          </CarouselItem>


      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
