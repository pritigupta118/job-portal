import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "./ui/button"

const category = [
  "FullStack Developer",
  "Frontend Developer",
  "Backend Developer",
  "DevOps Engineer",
  "Data Scientist",
  "Cloud Engineer",
]

const CategoryCarousel = () => {
  return (
    <div>
    <Carousel className="w-full max-w-xl mx-auto my-20">
        <CarouselContent>
            {
                category.map((cat, index) => (
                    <CarouselItem key={index} className="basis-3/3">
                        <Button  variant="outline" className="rounded-full">{cat}</Button>
                    </CarouselItem>
                ))
            }
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
    </Carousel>
</div>
  )
}

export default CategoryCarousel
