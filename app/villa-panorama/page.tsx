import BookYourStayCard from '@/components/BookYourStayCard/BookYourStayCard'
import ThumbnailGallery from '@/components/ThumbnailGallery/ThumbnailGallery'
import { Categorization } from '@/lib/categorization'
import { Features } from '@/lib/features'


const featuresLength = Features.features.length;
function VillaPanorama() {
  return (
    <section className='pt-[10rem]'>
        <div className='container'>
        <h1 className="mb-12 flex justify-center font-arbutus text-3xl sm:text-4xl font-ExtraBold text-dark_blue_black">
          Villa Panorama - Istra
        </h1>
        <div className='flex gap-8'>
            <div className='w-2/3'>
                <ThumbnailGallery />
                <div className='flex flex-col gap-4'>
                    <hr />
                    <div className='grid grid-cols-2 gap-4'>
                        {Categorization.categorization.map((item, index) => (
                            <button key={index} className='py-2 rounded-md border-[1px] border-black flex items-center justify-center gap-2'>
                                <span className=''>{item.title}</span>
                                <span className='font-Bold'>{item.value}</span>
                            </button>
                        ))}
                    </div>
                    <hr className='my-4' />
                </div>
                <h2 className="font-bold text-xl text-dark_blue_black">
            Villa Panorama
          </h2>
                <p>6 bedrooms with TV, 4 bathrooms (1 bath, 3 shower cabins), hair dryer, irons, ironing boards, vacuum cleaners, washing machine, safe, kitchen with dishwasher, microwave and oven, dining table with 12 seats places, heated pool of 26.5 m2 with a waterfall and massage pumps, jacuzzi, sauna, deck chairs, exercise bike, children's playground, trampoline, collection of books in English, German and Italian board games and toys for children.</p>
                <hr className='my-8'/>
                <h2 className="font-bold text-xl text-dark_blue_black">
            Features
          </h2>
                <ul className='grid grid-cols-2'>
                    {
                        Features.features.map((item, index) => (
                            <li key={index} className={`py-4 ${index != featuresLength - 1 && index != featuresLength - 2 ? "border-b-[1px] border-[#e5e7eb]" : ""}`}>
                                {item.title}
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className='w-1/3'>
                <BookYourStayCard />
            </div>
        </div>
        </div>
    </section>
  )
}

export default VillaPanorama